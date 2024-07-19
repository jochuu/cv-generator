/* eslint-disable react/prop-types */

function Personal({ personal, setPersonal }) {
  const { name, email, phone, address } = personal;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prevPersonal) => ({
      ...prevPersonal,
      [name]: value,
    }));
  };

  return (
    <div className='personal-container'>
      <div className='form-container'>
        <div className='form-header'>
          <h2>Personal Details</h2>
        </div>
        <div className='form-body'>
          <form>
            <div>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={handleChange}
                placeholder='Name'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={phone}
                onChange={handleChange}
                placeholder='Phone'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='address'>Address</label>
              <textarea
                id='address'
                name='address'
                value={address}
                onChange={handleChange}
                placeholder='Address'
                autoComplete='off'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Personal;
