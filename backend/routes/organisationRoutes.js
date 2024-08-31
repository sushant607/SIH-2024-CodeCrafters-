import express from "express";
import {  createOrganisationController, getAllOrgController, getOrgByIdController, deleteOrgController, updateOrgController } from "../controllers/organisationCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes
//CREATE_Organisation || POST
router.post("/create_org", authMiddleware, createOrganisationController);

//VIEW_ALL_ORG || GET
router.get("/get_all_org", authMiddleware, getAllOrgController);

//VIEW_ORG || GET
router.get("/get_id_org/:id", authMiddleware, getOrgByIdController);

//UPDATE_JOB || POST
router.post("/delete_id_org/:id", authMiddleware, deleteOrgController);

//UPDATE_ORG || POST
router.put("/update_id_org", authMiddleware, updateOrgController);


export { router };