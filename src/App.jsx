import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Personal from './components/Personal';
import CV from './components/CV';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const [personal, setPersonal] = useState({
    name: 'Example Fullname',
    email: 'example@example.com',
    phone: '+00 019304956',
    address: '10 Example St,\nExampleland,\n0123,\nNSW',
  });

  return (
    <>
      <header>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <Personal personal={personal} setPersonal={setPersonal} />
        <CV personal={personal} />
      </main>
    </>
  );
}

export default App;
