import userModel from "../models/userModel.js";
import { comparePassword, hassPassword } from "../utils/passwordUtil.js";
import { createToken, encryptToken } from "../utils/tokenUtil.js";

// for user register purpose 
export const userRegister = async (req, res) => {
    try {
        const { userName, mobileNo, email, password } = req.body;
        // to hash the password before saving it to the database
        const hashedPassword = await hassPassword(password);
        // to check the user already exists in the database 
        const existingUser = await userModel.findOne({ $or: [{ userName }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }
        // to create the user in the database 
        const user = await userModel.create({
            userName,
            mobileNo,
            email,
            password: hashedPassword
        });
        // to create the token for the user 
        const token = createToken({ userId: user._id, role: user.role });
        // to encrypt the token and save it in the cookie 
        const encryptedToken = encryptToken(token);
        // to send the token to cookie 
        res.cookie("token", encryptedToken, { httpOnly: true, expiresIn: '1d' });
        // to show the user details in the response 
        const userInfo = await userModel.findById(user._id).select("-password").lean();
        res.status(201).json({ message: "User Created Successfully", userInfo });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

// for user login purpose 
export const userLogin = async (req,res)=>{
    try {
        // to get the user email from database 
        const user = await userModel.findOne({ email: req.body.email });
        const password = req.body.password;
        // to check the user is available and compare the password hasing 
        const isValidUser = user && (await comparePassword(password, user.password));
        if (!isValidUser) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
        // to create the token for the user 
        const token = createToken({ userId: user._id, role: user.role });
        // to encrypt the token and save it in the cookie 
        const encryptedToken = encryptToken(token);
        // to send the token to cookie 
        res.cookie("token", encryptedToken, { httpOnly: true, expiresIn: '1d' });
        // to show the user details in the response 
        res.status(200).json({ message: "User Logged In Successfully", encryptedToken});
    } catch (error) {
        
    }
}

// for admin login purpose 
export const adminLogin = async (req,res)=>{
    try{
        const user = await userModel.findOne({ email: req.body.email });
        const password = req.body.password;
        // to check the user is available and compare the password hasing 
        const isValidUser = user && (await comparePassword(password, user.password));
        if (!isValidUser) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }
        // to create the token for the user 
        const token = createToken({ userId: user._id, role: user.role });
        // to encrypt the token and save it in the cookie 
        const encryptedToken = encryptToken(token);
        // to send the token to cookie 
        res.cookie("token", encryptedToken, { httpOnly: true, expiresIn: '1d' });
        // to show the user details in the response 
        res.status(200).json({ message: "User Logged In Successfully", encryptedToken });
    }catch(error){

    }
}