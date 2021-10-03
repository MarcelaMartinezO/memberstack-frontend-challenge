import { useEffect, useState } from 'react';
import logo from './chat.png';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const styles={
    button: {
      background: color
    }
  }

  useEffect(()=>{
    function checkColorChanges() {
      const lsColor = localStorage.getItem('buttonColor')
  
      if (lsColor) {
        setColor(lsColor);
      }
    }
  
    window.addEventListener('storage', checkColorChanges)
  
    return () => {
      window.removeEventListener('storage', checkColorChanges)
    }
  },[color])

  return (
    <div className="App" >
      <div className="chat-icon" style={styles.button}>
        <img src={logo} className="chat-icon-image" alt="logo" />
      </div>
    </div>
  );
}

export default App;
