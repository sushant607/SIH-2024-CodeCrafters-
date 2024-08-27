import bcrypt  from 'bcrypt';
import  jwt from 'jsonwebtoken' ;
import { user } from "../models/user.js";

const loginController = async (req, res) => {
    try {
        // Find user by username
        console.log('mila')
        const existingUser = await user.findOne({ username: req.body.username });
        if (!user) {
          return res
            .status(200)
            .send({ message: "user not found", success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, existingUser.password);
        if (!isMatch) {
          return res
            .status(200)
            .send({ message: "Invalid username or Password", success: false });
        }
        // const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1d",  });
        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            // token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in' });
    }
};

const registerController = async (req, res) => {
  console.log('mila')
    try {
        const exisitingUser = await user.findOne({ username: req.body.username });
        if (exisitingUser) {
          return res
            .status(200)
            .send({ message: "User Already Exist", success: false });
        }
        // Hash the password
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
       // Create a new user instance
       const newUser = new user(req.body);
       await newUser.save();
        res.status(201).json({ 
            success: true,
            message: 'Signed up successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const authController = async (req, res) => {
    try {
      const users = await user.findById({ _id: req.body.userId });
      users.password = undefined;
      if (!users) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      } else {
        res.status(200).send({
          success: true,
          data: users,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  };

export { loginController, registerController, authController };