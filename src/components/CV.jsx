import { useState } from 'react';

export default function CV({ personal, work, education, cv, toggleCV }) {
  return (
    <>
      {cv && (
        <>
          <div className='cv-container'>
            <div className='cv-personal-section'>
              <h3 className='cv-personal-name'>{personal.name}</h3>
              <div className='cv-personal-info'>
                <div className='cv-personal-email'>{personal.email}</div>
                <div className='cv-personal-phone'>{personal.phone}</div>
                <div className='cv-personal-address'>{personal.address}</div>
              </div>
            </div>
            <h2>Work Experience</h2>
            <div className='cv-work-section'>
              <div className='cv-work-row'>
                <div className='cv-work-company'>{work.company}</div>
                <div className='cv-work-location'>{work.location}</div>
                <div className='cv-work-start-date'>{work.startDate}</div>
                <div className='divider'> - </div>
                <div className='cv-work-end-date'>{work.endDate}</div>
              </div>
              <div className='cv-work-position'>{work.position}</div>
              <div className='cv-work-description'>{work.description}</div>
            </div>
            <h2>Education</h2>
            <div className='cv-education-section'>
              <div className='cv-education-row'>
                <div className='cv-education-school'>{education.school}</div>
                <div className='cv-education-start-date'>
                  {education.startDate}
                </div>
                <div className='divider'> - </div>
                <div className='cv-education-end-date'>{education.endDate}</div>
              </div>
              <div className='cv-education-degree'>{education.degree}</div>
              <div className='cv-education-project'>{education.project}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
