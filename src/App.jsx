import { useState } from 'react';
import Personal from './Personal';
import CV from './CV';
import './App.css';

function App() {
  const [personal, setPersonal] = useState({
    name: 'Example Fullname',
    email: 'example@example.com',
    phone: '+00 019304956',
    address: '10 Example St,\nExampleland,\n0123,\nNSW',
  });

  return (
    <>
      <Personal personal={personal} setPersonal={setPersonal} />
      <CV personal={personal} />
    </>
  );
}

export default App;
