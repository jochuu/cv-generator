const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className='button-container'>
      <button
        className={theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
        onClick={toggleTheme}
      ></button>
    </div>
  );
};

export default ThemeToggle;
