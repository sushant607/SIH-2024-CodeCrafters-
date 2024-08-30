import cloudinary from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

const { v2: cloudinaryV2 } = cloudinary;

dotenv.config();

cloudinary.config({ 
  cloud_name:process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret:process.env.API_SECRET,
});

const UploadOnCloudinary=async(localfilePath)=>{
  try{
    if(!localfilePath) return null
    const response=await cloudinary.uploader.upload(localfilePath,{resource_type:"auto"})
    //File is uploaded successfully
    console.log("File has been uploaded Successfully",response.url);
    return response

}
catch(err){
    fs.unlinkSync(localfilePath)//remove the temporary locally stored file 
    console.log(err);
    return null
}
}

export default UploadOnCloudinary
