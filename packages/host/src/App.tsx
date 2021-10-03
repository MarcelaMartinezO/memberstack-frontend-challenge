import { useState, useEffect } from "react";
import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";
import './App.css';

const App = () => {
  const [color, setColor] = useState('');

  useEffect(() => {    
    if(color === '' && localStorage.getItem('buttonColor') === null){   
      setColor('#e66465');
      localStorage.setItem('buttonColor', '#e66465');
      window.dispatchEvent( new Event('storage') )
    } else {
      if(color !== ''){
        localStorage.setItem('buttonColor', color);
        window.dispatchEvent( new Event('storage') )
      } else
        setColor(''+localStorage.getItem('buttonColor'));
    }    
  },[color])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <ColorPicker
        value={color}
        onChange={handleColorChange}
      />
      <ChatBotIFrame />
    </>
  );
}

export default App;
