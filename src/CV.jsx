import { useState } from 'react';

function CV({ personal }) {
  const { name, email, phone, address } = personal;
  return (
    <div className='cv-container'>
      <div className='cv-personal-section'>
        <h2 className='cv-name'>{name}</h2>
        <div className='cv-email'>{email}</div>
        <div className='cv-phone'>{phone}</div>
        <div className='cv-address'>{address}</div>
      </div>
    </div>
  );
}

export default CV;
