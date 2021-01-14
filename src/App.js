import React, {useState,useEffect} from 'react';
import './components/App.css';
import ServiceTree from './components/serviceTree/serviceTree';

// Width with no scroll bar
function WinWidth() {
  const [VW, setVW] = useState(undefined)

  useEffect(() => {
    function handleResize() {
      setVW(document.documentElement.clientWidth);
    }

    window.addEventListener("resize", ()=>{
      handleResize()
    });
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return VW;
}

function App() {
  const size = WinWidth();
  if(size !== undefined){document.documentElement.style.setProperty('--vw',size+'px')}
  return (
    <ServiceTree vw={size}/>
  );
}

export default App;
