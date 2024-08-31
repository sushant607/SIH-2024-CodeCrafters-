import { user } from "../models/user.js";
import { Organisation } from "../models/employee.js";

// Create Org
const createOrganisationController = async (req, res) => {
  try {
    const newOrg = new Organisation(req.body); 
    const savedOrg = await newOrg.save(); 
    res.status(201).json(savedOrg); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};

// Get all Org
const getAllOrgController = async (req, res) => {
  try {
    const org = await Organisation.find(); 
    res.status(200).json(org); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

// Get a single Org by ID
const getOrgByIdController = async (req, res) => {
  try {
    const org = await Organisation.findOne({ userId: req.params.id });
    if (!org) {
      return res.status(404).json({ message: "Org not found" }); 
    }
    res.status(200).json(org); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

// Delete Org
const deleteOrgController = async (req, res) => {
    try {
      const org = await Organisation.findByIdAndDelete(req.params.id);
      if (!org) {
        return res.status(404).send({ message: "Org not found", success: false });
      }
      res.status(200).send({ message: "Org deleted successfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Org Profile Delete issue",
        error,
      });
    }
  };

// Update Org
const updateOrgController = async (req, res) => {
    try {
      const org = await Organisation.findOneAndUpdate(
        { userId: req.body.userId },  
        req.body,          
      );
      res.status(201).send({
        success: true,
        message: "Org Profile Updated"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Org Profile Update issue",
        error,
      });
    }
  };

  // Details Org
const OrgInfoController = async (req, res) => {
  try {
    console.log("UserID being queried:", req.body.userId);  // Log the userId
    
    const organise = await Organisation.findOne({ userId: req.body.userId });
    
    console.log("Organisation found:", organise);  // Log the result of the query
    res.status(200).send({
      success: true,
      message: "Organisation data fetch success",
      data: organise,
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

  export { createOrganisationController, getAllOrgController, getOrgByIdController, deleteOrgController, updateOrgController, OrgInfoController };