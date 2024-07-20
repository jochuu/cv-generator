import { useState } from 'react';

export default function CV({ personal, work, education, cv, toggleCV }) {
  return (
    <>
      {cv && (
        <>
          <div className='cv-container'>
            <div className='cv-personal-section'>
              <h3 className='cv-personal-name'>{personal.name}</h3>
              <div className='cv-personal-email'>{personal.email}</div>
              <div className='cv-personal-phone'>{personal.phone}</div>
              <div className='cv-personal-address'>{personal.address}</div>
            </div>
            <div className='cv-work-section'>
              <h3 className='cv-work-company'>{work.company}</h3>
              <div className='cv-work-location'>{work.location}</div>
              <div className='cv-work-position'>{work.position}</div>
              <div className='cv-work-start-date'>{work.startDate}</div>
              <div className='cv-work-end-date'>{work.endDate}</div>
              <div className='cv-work-description'>{work.description}</div>
            </div>
            <div className='cv-education-section'>
              <h3 className='cv-education-school'>{education.school}</h3>
              <div className='cv-education-degree'>{education.degree}</div>
              <div className='cv-education-start-date'>
                {education.startDate}
              </div>
              <div className='cv-education-end-date'>{education.endDate}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
