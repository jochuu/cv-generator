/* eslint-disable react/prop-types */

function WorkExperience({ work, setWork }) {
  const { company, location, position, startDate, endDate, description } = work;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWork((prevWork) => ({
      ...prevWork,
      [name]: value,
    }));
  };

  return (
    <div className='work-container'>
      <div className='form-container'>
        <div className='form-header'>
          <h2>Work Experience</h2>
        </div>
        <div className='form-body'>
          <form>
            <div>
              <label htmlFor='work-company'>Company Name</label>
              <input
                type='text'
                id='work-company'
                name='company'
                value={company}
                onChange={handleChange}
                placeholder='Company Name'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='work-location'>Location</label>
              <input
                type='text'
                id='work-location'
                name='location'
                value={location}
                onChange={handleChange}
                placeholder='Location'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='work-position'>Position</label>
              <input
                type='text'
                id='work-position'
                name='position'
                value={position}
                onChange={handleChange}
                placeholder='Position'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='work-start-date'>Start Date</label>
              <input
                type='text'
                id='work-start-date'
                name='startDate'
                value={startDate}
                onChange={handleChange}
                placeholder='Start Date'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='work-end-date'>End Date</label>
              <input
                type='text'
                id='work-end-date'
                name='endDate'
                value={endDate}
                onChange={handleChange}
                placeholder='End Date'
                autoComplete='off'
              />
            </div>
            <div>
              <label htmlFor='work-description'>Description</label>
              <textarea
                type='text'
                id='work-description'
                name='description'
                value={description}
                onChange={handleChange}
                placeholder='Description'
                autoComplete='off'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
