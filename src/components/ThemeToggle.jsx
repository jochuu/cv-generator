const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className={theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
      onClick={toggleTheme}
    ></button>
  );
};

export default ThemeToggle;
