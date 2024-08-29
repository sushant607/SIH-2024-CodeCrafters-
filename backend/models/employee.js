import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    Company_name: String,
    Company_description: String,
    Company_logo: String,
    Jobs_offered: [String],
  }, { timestamps: true });

  export const Organisation = mongoose.model('Org', orgSchema);