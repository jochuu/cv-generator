import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Personal from './components/Personal';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import CV from './components/CV';
import './styles/App.css';
import CVToggle from './components/CVToggle';

function App() {
  const [theme, setTheme] = useState('light');

  const [cv, setCV] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const toggleCV = () => {
    setCV((prevCV) => !prevCV);
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
    position: 'Junior Web Developer',
    startDate: 'June 2024',
    endDate: 'Current',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  });

  const [education, setEducation] = useState({
    school: 'University of Example',
    degree: 'BSc. Example (1:1)',
    startDate: 'Sept. 2020',
    endDate: 'July 2024',
    project:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  });

  return (
    <>
      <header>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h2>CV Generator</h2>
      </header>
      <main>
        <div className={cv ? 'input-container' : 'input-container fullsize'}>
          <Personal personal={personal} setPersonal={setPersonal} cv={cv} />
          <WorkExperience work={work} setWork={setWork} cv={cv} />
          <Education
            education={education}
            setEducation={setEducation}
            cv={cv}
          />
        </div>
        <CVToggle cv={cv} toggleCV={toggleCV} />
        <CV
          personal={personal}
          work={work}
          education={education}
          cv={cv}
          setCV={toggleCV}
        />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
