import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
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

  const [work, setWork] = useState({
    company: 'Example Inc.',
    location: 'Remote',
    position: 'Junior Dev.',
    startDate: 'July 2024',
    endDate: 'Current',
    description: 'Lorem Ipsum',
  });

  const [education, setEducation] = useState({
    school: 'University of Example',
    degree: 'BSc. Example (2:1)',
    startDate: 'Sept 2020',
    endDate: 'July 2024',
  });

  return (
    <>
      <header>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <div className='input'>
          <Personal personal={personal} setPersonal={setPersonal} />
          <WorkExperience work={work} setWork={setWork} />
          <Education education={education} setEducation={setEducation} />
        </div>
        <div className='output'>
          <CV personal={personal} work={work} education={education} />
        </div>
      </main>
    </>
  );
}

export default App;
