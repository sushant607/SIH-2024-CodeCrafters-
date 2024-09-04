import { user } from "../models/user.js";
import { Freelancer } from "../models/freelancer.js";
import UploadOnCloudinary from "../util/upload.js";
import fs from 'fs';

// Create Freelancer
const applyFreelancerController = async (req, res) => {
  try {
    const { userId } = req.body;

    // Check if the freelancer profile already exists for the given user
    const existingFreelancer = await Freelancer.findOne({ userId });
    if (existingFreelancer) {
      return res.status(400).json({
        success: false,
        message: "Freelancer profile already exists. You cannot apply again.",
      });
    }

    // Find the user by ID to ensure the user exists
    const newUser = await user.findById(userId);
    if (!newUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Create the new freelancer profile
    const newAccData = { ...req.body };
    const newFreelancer = await Freelancer.create(newAccData);

    // Save any necessary changes to the user (optional step if there's any association to be saved)
    await newUser.save();

    res.status(201).send({
      success: true,
      message: "Account applied successfully",
      data: newFreelancer, // Optionally include the newly created freelancer data
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Error while applying for account",
    });
  }
};
const getFreelancerbyid = async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }
    res.status(200).json(freelancer);  // Fixed to return freelancer data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Details Freelancer
const FreelancerInfoController = async (req, res) => {
  try {
    const freelancer = await Freelancer.findOne({ userId: req.body.userId });
    if (!freelancer) {
      return res.status(404).send({
        success: false,
        message: "Freelancer not found",
      });
    }
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

// Update Profile
const updateProfileController = async (req, res) => {
  try {
    const freelancer = await Freelancer.findOneAndUpdate(
      { userId: req.body.userId },
      req.body,
      { new: true }
    );
    if (!freelancer) {
      return res.status(404).send({
        success: false,
        message: "Freelancer not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Freelancer Profile Updated",
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

const uploadImageController = async (req, res) => {
  try {
    const file = req.file;
    console.log('Uploading:', file.originalname);
    const image = await UploadOnCloudinary(file.path);
    console.log('Uploaded image:', image);

    res.status(200).json({
      message: 'File uploaded successfully',
      imageID: image.public_id,
      imageURL: image.secure_url,
    });
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).json({ message: 'Failed to upload file', error: err });
  }
};

const uploadResumeController = async (req, res) => {
  try {
    const file = req.file;
    console.log('Uploading:', file.originalname);
    const resume = await UploadOnCloudinary(file.path);
    console.log('Uploaded resume:', resume);

    res.status(200).json({
      message: 'Resume uploaded successfully',
      resumeID: resume.public_id,
      resumeURL: resume.secure_url,
    });
  } catch (err) {
    console.error('Error uploading resume:', err);
    res.status(500).json({ message: 'Failed to upload resume', error: err });
  }
};


export { applyFreelancerController,getFreelancerbyid, FreelancerInfoController, updateProfileController, uploadImageController, uploadResumeController };
