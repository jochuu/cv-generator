const CVToggle = ({ cv, toggleCV }) => {
  return <button onClick={toggleCV}>{cv ? 'hide' : 'show'}</button>;
};

export default CVToggle;
