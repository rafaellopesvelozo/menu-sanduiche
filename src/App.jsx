import { useState } from 'react';
import './App.css';

function App() {
  const [active, setMode] = useState(false)
  const toggleMode = () => {
    setMode(!active)

  }
  return (
    <div className="App">
      <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
        <div className='hamburguer harburguerIcon' ></div>
      </div>
      <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
        <div className='list'>
          <ul className='listItems'>
            <li>HOME</li>
            <li>PRODUCT</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
