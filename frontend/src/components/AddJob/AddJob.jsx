import React from 'react'
import "./AddJob.css"

const AddJob = () => {

    const handleSubmit = async (e) => {
        return;
    }
  return (
    <main className='addjob-cont'>
      <form action='' onSubmit={handleSubmit} id='addjob-form'>
        <label htmlFor='role'>
          Role:
          <input type='text' placeholder='Role' id='role' name='role' />
        </label>
        <label htmlFor='job_description'>
          Job Description:
          <textarea
            name='job_description'
            id='job_desscription'
            placeholder='Description'
          ></textarea>
        </label>
        <label htmlFor='skills_required'>
          Skills Required:
          <input type='text' name='skills_required' id='skills_required' />
        </label>
        <div className='exp-level'>
          <input
            type='radio'
            name='experience_level'
            id='entry'
            value='Entry Level'
          />
          <label htmlFor="entry">Entry Level</label>
          <input
            type='radio'
            name='experience_level'
            id='mid'
            value='Mid Level'
          />
          <label htmlFor="mid">Mid Level</label>
          <input
            type='radio'
            name='experience_level'
            id='senior'
            value='Senior Level'
          />
          <label htmlFor="senior">Senior Level</label>
        </div>
        <label htmlFor="compensation">
            Compensation Details:
            <input type="text" name="compensation" id="compensation" />
        </label>
        <label htmlFor="application_deadline">
            Application Deadline:
            <input type="date" name='application_deadline' id="application_deadliine"/>
        </label>
        <div className='location-req'>
            Location Requirements:
            <input type="radio" name="location_requirements" id="remote" />
            <label htmlFor="remote">Remote</label>
            <input type="radio" name="location_requirements" id="on-site" />
            <label htmlFor="on-site">On-Site</label>
            <input type="radio" name="location_requirements" id="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
        </div>
        <label htmlFor="contact_information">
            Contact Information:
            <input type="text" name="contact_information" id="contact_information" />
        </label>
      </form>
      <section className='submit-section'>
        
      </section>
    </main>
  );
}

export default AddJob