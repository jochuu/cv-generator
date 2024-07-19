function Education({ education, setEducation }) {
  const { school, degree, startDate, endDate } = education;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  return (
    <div className='education-container'>
      <div className='form-container'>
        <div className='form-header'>
          <h2>Education</h2>
        </div>
        <div className='form-body'>
          <form>
            <div>
              <label htmlFor='education-school'>School</label>
              <input
                type='text'
                id='education-school'
                name='school'
                value={school}
                onChange={handleChange}
                placeholder='School'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='education-degree'>Degree</label>
              <input
                type='text'
                id='education-degree'
                name='degree'
                value={degree}
                onChange={handleChange}
                placeholder='Degree'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='education-start-date'>Start Date</label>
              <input
                type='text'
                id='education-start-date'
                name='startDate'
                value={startDate}
                onChange={handleChange}
                placeholder='Start Date'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='education-end-date'>End Date</label>
              <input
                type='text'
                id='education-end-date'
                name='endDate'
                value={endDate}
                onChange={handleChange}
                placeholder='End Date'
                autoComplete='off'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Education;
