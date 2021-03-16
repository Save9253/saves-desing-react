import React, {useState,useEffect} from 'react';
import './components/App.css';
import {colors} from './components/styles'
import Face from './components/face' 
import BigSocLink from './components/BigSocLink'

function App() {
  const [linkC,setLinkC] = useState({C:colors.black,BC:'transparent'})
  const styles = {
    linkDiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        flexWrap: 'wrap'
    },
    link:{
      backgroundColor:linkC.BC,
      padding: '8px 10px',
      borderRadius: '2px',
      fontSize: '20px',
      fontFamily: '"Do Hyeon", sans-serif'
    }
  }
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
    <React.Fragment>
      <Face/>
      <BigSocLink type='In' title="Connect with Saveliy on" link="https://www.linkedin.com/in/saveliy-saunin/"/>
      <BigSocLink type='Be' title="Check Saveliy's projects on" link="https://www.behance.net/saveliy_saunin"/>
    </React.Fragment>
  );
}

export default App;
