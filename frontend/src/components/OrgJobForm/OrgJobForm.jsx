// import React, { useState } from "react";

// const OrgJobForm = () => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="role">{"Role"}</label>
//         <input type="text" id="role" name="role" onChange={handleChange}  required     />
//       </div>
//       <div>
//         <label htmlFor="salary">{"Job description"}</label>
//         <input type="text" id="salary" name="salary" onChange={handleChange}  required     />
//       </div>
//       <div>
//         <label htmlFor="job_description">{"Skills Required"}</label>
//         <input type="text" id="job_description" name="job_description" onChange={handleChange}  required     />
//       </div>
//       <div>
//         <label htmlFor="about_the_company">{"Experience Level"}</label>
//         <select id="about_the_company" name="about_the_company" onChange={handleChange}  required>
//           <option value="option1">Option 1</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="project_details">{"Compensation"}</label>
//         <input type="number" id="project_details" name="project_details" onChange={handleChange}  required     />
//       </div>
//       <div>
//         <label htmlFor="">{"Project Duration"}</label>
//         <select id="" name="" onChange={handleChange}  required>
//           <option value="option1">Option 1</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="_1">{"Application Deadline"}</label>
//         <input type="date" id="_1" name="_1" onChange={handleChange}  required     />
//       </div>
//       <div>
//         <label htmlFor="_2">{" Location Requirements"}</label>
//         <select id="_2" name="_2" onChange={handleChange}  required>
//           <option value="option1">Option 1</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="_3">{"Contact Information"}</label>
//         <input type="text" id="_3" name="_3" onChange={handleChange}  required     />
//       </div>
//       <div>
//         <label htmlFor="_4">{"Company Description"}</label>
//         <input type="text" id="_4" name="_4" onChange={handleChange}  required     />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default OrgJobForm;
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const OrgJobForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="role">Role</Label>
        <Input type="text" id="role" name="role" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="salary">Job Description</Label>
        <Input type="text" id="salary" name="salary" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="job_description">Skills Required</Label>
        <Input type="text" id="job_description" name="job_description" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="about_the_company">Experience Level</Label>
        <Select id="about_the_company" name="about_the_company" onChange={handleChange} required>
          <option value="option1">Option 1</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="project_details">Compensation</Label>
        <Input type="number" id="project_details" name="project_details" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="project_duration">Project Duration</Label>
        <Select id="project_duration" name="project_duration" onChange={handleChange} required>
          <option value="option1">Option 1</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="application_deadline">Application Deadline</Label>
        <Input type="date" id="application_deadline" name="application_deadline" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="location_requirements">Location Requirements</Label>
        <Select id="location_requirements" name="location_requirements" onChange={handleChange} required>
          <option value="option1">Option 1</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="contact_information">Contact Information</Label>
        <Input type="text" id="contact_information" name="contact_information" onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="company_description">Company Description</Label>
        <Input type="text" id="company_description" name="company_description" onChange={handleChange} required />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default OrgJobForm;
