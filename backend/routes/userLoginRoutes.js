//userLoginRoutes.js
const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const cookie = require("cookie");

//User login route
secretKey = "your-secret-key";
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    //Hash the provided password and compare with stored password
    const hashedInputPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (hashedInputPassword !== user.hashedPassword) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    console.log({
      userId: user._id,
      userType: user.userType,
      email: user.email,
    });
    const token = jwt.sign(
      { userId: user._id, userType: user.userType, email: user.email },
      secretKey,
      { expiresIn: "1h" }
    );

    //Generate token with user type information

    //Check userType to detemine if its a regular user or seller

    if (user.userType === "user") {
      //Handle regular user login
      res
        .status(200)
        .json({
          userType: "user",
          message: "Regular user logged in",
          redirect: "/",
          token,
        });
    } else if (user.userType === "seller") {
      //Handle seller login
      res
        .status(200)
        .json({
          userType: "seller",
          message: "Seller logged in",
          redirect: "/seller",
          token,
        });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/google", async (req, res) => {
    try {
      console.log(req.body);
      const {
        email,
        given_name: firstName,
        family_name: lastName,
        id: googleId,
        userType
      } = req.body;
  
      let newUser; // Define newUser variable
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        const token = jwt.sign(
          { googleId, userType, email, userId: existingUser._id },
          secretKey,
          { expiresIn: "1h" }
        );
  
        return res.json({ userType: "user", redirect: "/", token });
      } else {
        newUser = new User({
          googleId,
          email,
          userType: "user",
          firstname: firstName,
          lastname: lastName,
        });
        await newUser.save();
      }
  
      const token = jwt.sign(
        { googleId, userType, email, userId: newUser._id },
        secretKey,
        { expiresIn: "1h" }
      );
      console.log(token)
  
      res.json({ userType: "user", redirect: "/", token });
    } catch (error) {
      console.log("Error", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;
 