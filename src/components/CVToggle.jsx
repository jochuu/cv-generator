const CVToggle = ({ cv, toggleCV }) => {
  return (
    <div className='button-container'>
      <button
        className={
          cv ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'
        }
        onClick={toggleCV}
      ></button>
    </div>
  );
};
export default CVToggle;
