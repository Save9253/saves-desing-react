import React, {useState,useEffect} from 'react';
import './components/App.css';
import Face from './components/face' 
import BigSocLink from './components/BigSocLink'
import Projects from './components/Projects'

export default function App() {
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

  if(VW){document.documentElement.style.setProperty('--vw',VW+'px')}
  return (
    <div style={{width:VW}}>
      <Face/>
      <BigSocLink type='In' title="Connect with Saveliy on" link="https://www.linkedin.com/in/saveliy-saunin/"/>
      <BigSocLink type='Be' title="Check Saveliy's projects on" link="https://www.behance.net/saveliy_saunin"/>
      <Projects/>
    </div>
  );
}