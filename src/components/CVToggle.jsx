const CVToggle = ({ cv, toggleCV }) => {
  return (
    <button
      className={cv ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left'}
      onClick={toggleCV}
    ></button>
  );
};
export default CVToggle;
