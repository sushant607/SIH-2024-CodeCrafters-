import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from '../server.js';
import { user } from '../models/user.js';
import '../controllers/freelancerCtrl.js';
import '../controllers/userCtrl.js';
dotenv.config();
chai.use(chaiHttp);
const expect = chai.expect;

describe('Freelancer API Endpoints & Auth', function () {
  this.timeout(20000); // Increased timeout for file uploads and DB ops

  let token;
  let createdUser;

  const testUser = {
    name: 'Test User',
    username: 'Test_user',
    email: 'freelancer@example.com',
    password: '123@Password',
    role: 'freelancer',
  };

  before(async function () {
    await mongoose.connect(process.env.MONGO_URL);

    createdUser = await user.create(testUser);

    const res = await chai.request(app).post('/api/v1/user/signin').send({
      username: testUser.username,
      password: testUser.password,
    });

    token = res.body.token;
  });

  after(async function () {
    await user.deleteOne({ _id: createdUser._id });
    await mongoose.connection.close();
  });

  // ✅ Upload profile image
  it('should upload profile image successfully', async function () {
    const res = await chai
      .request(app)
      .post('/api/v1/freelancer/upload_image')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', fs.readFileSync(path.join('test/assets/Sushant_Bagul_Photo.jpg')), 'Sushant_Bagul_Photo.jpg');

    expect(res).to.have.status(200);
  });

  // ❌ Upload image without token
  it('should fail to upload image without token', async function () {
    const res = await chai
      .request(app)
      .post('/api/v1/freelancer/upload_image')
      .attach('file', fs.readFileSync(path.join('test/assets/Sushant_Bagul_Photo.jpg')), 'Sushant_Bagul_Photo.jpg');

    expect(res).to.have.status(401);
  });

  // ✅ Upload resume
  it('should upload resume successfully', async function () {
    const res = await chai
      .request(app)
      .post('/api/v1/freelancer/upload_resume')
      .set('Authorization', `Bearer ${token}`)
      .attach('file', fs.readFileSync(path.join('test/assets/Sushant_Bagul-Resume.pdf')), 'Sushant_Bagul-Resume.pdf');

    expect(res).to.have.status(200);
  });

  // ✅ Signup with valid details
  it('should signup successfully with valid details', async function () {
    const newUser = {
      name: 'New User',
      username: 'newuser123',
      email: 'newuser@example.com',
      password: 'Password@123',
      role: 'freelancer',
    };

    const res = await chai.request(app).post('/api/v1/user/register').send(newUser);
    expect(res).to.have.status(201);

    // Cleanup
    await user.deleteOne({ username: newUser.username });
  });

  // ❌ Signup with missing email
  it('should fail signup with missing email', async function () {
    const res = await chai.request(app).post('/api/v1/user/register').send({
      name: 'New User',
      username: 'noemailuser',
      password: 'Password@123',
      role: 'freelancer',
    });

    expect(res).to.have.status(500);
  });

  // ❌ Signup with duplicate username/email
  it('should fail signup with existing username', async function () {
    const res = await chai.request(app).post('/api/v1/user/register').send(testUser);
    expect(res).to.have.status(400);
  });

  // ✅ Login with correct credentials
  it('should login successfully with correct credentials', async function () {
    const res = await chai.request(app).post('/api/v1/user/signin').send({
      username: 'sushie',
      password: '123@Password',
    });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property('token');
  });

  // ❌ Login with wrong password
  it('should fail login with wrong password', async function () {
    const res = await chai.request(app).post('/api/v1/user/signin').send({
      username: 'sushie',
      password: 'WrongPassword123',
    });

    expect(res).to.have.status(401);
  });

  // ❌ Login with non-existent user
  it('should fail login with non-existent user', async function () {
    const res = await chai.request(app).post('/api/v1/user/signin').send({
      username: 'ghostuser',
      password: 'DoesntMatter',
    });

    expect(res).to.have.status(404);
  });

 

  // ❌ Profile update without token
  it('should fail to update profile without token', async function () {
    const res = await chai
      .request(app)
      .put('/api/v1/freelancer/update_profile')
      .send({
        name: 'Updated User',
        about: 'Missing auth token',
      });

    expect(res).to.have.status(401);
  });
});
