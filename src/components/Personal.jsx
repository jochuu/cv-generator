/* eslint-disable react/prop-types */
import { useState } from 'react';

function Personal({ personal, setPersonal }) {
  const { name, email, phone, address } = personal;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      [name]: value,
    }));
  };

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div className='personal-container'>
      <div className='form-container'>
        <div className='form-header'>
          <button className='header-button' onClick={handleToggle}>
            Personal Details
          </button>
        </div>
        {toggle && (
          <div className='form-body'>
            <form>
              <div>
                <label htmlFor='personal-name'>Name</label>
                <input
                  type='text'
                  id='personal-name'
                  name='name'
                  value={name}
                  onChange={handleChange}
                  placeholder='Name'
                  autoComplete='off'
                />
              </div>
              <div>
                <label htmlFor='personal-email'>Email</label>
                <input
                  type='email'
                  id='personal-email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  placeholder='Email'
                  autoComplete='off'
                />
              </div>
              <div>
                <label htmlFor='personal-phone'>Phone</label>
                <input
                  type='tel'
                  id='personal-phone'
                  name='phone'
                  value={phone}
                  onChange={handleChange}
                  placeholder='Phone'
                  autoComplete='off'
                />
              </div>
              <div>
                <label htmlFor='personal-address'>Address</label>
                <textarea
                  id='personal-address'
                  name='address'
                  value={address}
                  onChange={handleChange}
                  placeholder='Address'
                  autoComplete='off'
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Personal;
