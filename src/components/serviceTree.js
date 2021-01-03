import React, { useState } from 'react';
import * as Ills from './Ills';
import colors from './colors'
import BtnWIcon from "./BtnWIcon";
import * as Icons from './Icons'
const {mdGray,ltGreen,mdGreen} = colors

function ServiceTree(props) {
  const [fold,setFold] = useState(true)
  return (
    <div style={{
        backgroundColor:mdGray,
        width:props.vw,
        display:'grid',
        placeContent:'center',
        padding:20,
        gridTemplateColumns:'50px auto 50px'
    }}>
      <div className='rowC' style={{transform:'rotate(90deg)',width:200,height:50,placeSelf:'center'}}>
        <Icons.Add size={20} color={mdGreen}/>
        <h2 style={{color:mdGreen}}>Add Graphics</h2>
      </div>
      <section style={{
        display:'grid',
        placeContent:'center',
      }}>
        <div className='rowC'>
          <Icons.Add size={20} color={ltGreen}/>
          <h2 style={{color:ltGreen}}>Add Home Page</h2>
        </div>
        <Ills.Home style={{placeSelf: 'center'}} height="200"/>
        <div className='rowC'>
          <BtnWIcon style={{height:45}} color={mdGreen} Hcolor={ltGreen} active={fold} icon="info" onClick={()=>{
            if(fold){setFold(false)}else{setFold(true)}
          }}/>
          <BtnWIcon  style={{height:45}} color={mdGreen} Hcolor={ltGreen} icon="add2cart" />
        </div>
        <p className='unfoldInfo' style={{maxWidth:275,height:fold?0:'100%',opacity:fold?0:1}}>The home page includes a basic setup for your website, three sections with information, and a navigation bar.</p>
      </section>
      <div className='rowC' style={{transform:'rotate(-90deg)',width:200,height:50,placeSelf:'center'}}>
        <Icons.Add size={20} color={mdGreen}/>
        <h2 style={{color:mdGreen}}>Add Elements</h2>
      </div>
    </div>
  );
}

export default ServiceTree;
