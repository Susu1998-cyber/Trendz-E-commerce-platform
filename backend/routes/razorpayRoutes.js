const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { Payment } = require("../models/payment");
require('dotenv').config();
router.post("/orders", (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_24SmgPOwISZrPT",
      key_secret: "3UMeqaKBYW9hHO9pl3lOeC6s",
    });
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
      }
      console.log("order", order);
      res.status(200).json({ data: order });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log(error);
  }
});

router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", "3UMeqaKBYW9hHO9pl3lOeC6s")
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      //createa new Payment Instance
      const payment = new Payment({
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        status: "verified",
        userId: formData.userId,
        deliveryState: formData.deliveryState,
        firstName: formData.firstName,
        lastName: formData.lastName,
        companyName: formData.companyName,
        address: formData.address,
        email: formData.email,
        phone: formData.phone,
        additionalInfo: formData.additionalInfo,
        totalPrice: formData.totalPrice,
        products: formData.products,
        orderDate: new Date(),
      });
      console.log("payment", payment);

      //save the payment details to the database
      await payment.save();
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
  console.log("request", req.body);
});
module.exports = router;
