import { user } from "../models/user.js";
import { Freelancer } from "../models/freelancer.js";
import UploadOnCloudinary from "../util/upload.js";
// Create Freelancer
const applyFreelancerController = async (req, res) => {
    try {
      console.log("hello boi",req.body)
      const newAccData = { ...req.body };
      const newfreelancer = await  Freelancer.create(newAccData); 
      const userId = req.body.userId; 
      const users = await user.findById(userId);
      if (!users) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
      await users.save();

      res.status(201).send({
        success: true,
        message: " Account Applied Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error WHile Applying For Account",
      });
    }
  };

// Details Freelancer
const FreelancerInfoController = async (req, res) => {
    try {
      const freelancer = await Freelancer.findOne({ userId: req.body.userId });
      res.status(200).send({
        success: true,
        message: "Freelancer data fetch success",
        data: freelancer,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error in Fetching Details",
      });
    }
  };
  
// Update Proflie
  const updateProfileController = async (req, res) => {
    try {
      const freelancer = await Freelancer.findOneAndUpdate(
        { userId: req.body.userId },
        req.body
      );
      res.status(201).send({
        success: true,
        message: "Freelancer Profile Updated"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Freelancer Profile Update issue",
        error,
      });
    }
  };
   const uploadImageController=async (req, res) => {
  try {
    const file = req.file;
    console.log(file.originalname);
    const image = await UploadOnCloudinary(file.path);
    console.log(image);
    res.json({ imageID: image.public_id, imageURL: image.url });
  } catch (err) {
    res.json(err);
  }
};
// My jobs 

// Notification 

export { applyFreelancerController, FreelancerInfoController, updateProfileController ,uploadImageController};
  