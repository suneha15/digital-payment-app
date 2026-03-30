const express = require("express");
const zod = require("zod");
const {User} = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/index")
const router = express.Router();

const signupSchema = zod.object({
    userName : zod.string(),
    password : zod.string().min(6),
    firstName : zod.string().min(2),
    lastName : zod.string().min(2)
})

// test route
router.get("/test", (req, res) => {
  console.log("✅ HIT /user/test route");
  res.send("User route working!!");
});

router.post('/signup', async (req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);

    // 1. Validate input
    if(!success){
        return res.status(411).json({
            message : "Email already taken /Incorrect Input"
        });
    }

    //2. check if user already exists
    const existingUser = await User.findOne({
        username : body.username
    });

    if(existingUser._id){
        return res.status(411).json({
            message : "Email already taken / Invalid Inputs"
        });
    }

    //3. Create user
    const user = await User.create(body);

    //4. generate jwt
    const token = jwt.sign(
        {userId: user._id},
        JWT_SECRET
    );

    res.json({
        message : "user created successfully",
        token : token
    })
})

console.log("🔥 user router loaded");
module.exports = router;
