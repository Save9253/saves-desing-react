import React from 'react';
import colors from '../colors'
import * as Icons from '../Icons'

const {mdGreen} = colors

export default function SideLine(props) {
    const {title,side} = props
  return (
      <React.Fragment>
        {side === 'L' ? 
        <div className='c sideLIne' style={{borderLeftWidth:2}}>
            <div className='line'/>
        </div>
        :<div className='line'/>}
        <div className='rowC' style={{transform:`rotate(${side === 'R' ? '-90' : '90'}deg)`,width:200,height:50,placeSelf:'center'}}>
            <Icons.Add size={20} color={mdGreen}/>
            <h2 style={{color:mdGreen}}>{title}</h2>
        </div>
        {side === 'R' ? 
        <div className='c sideLIne' style={{borderRightWidth:2}}>
            <div className='line'/>
        </div>
        :<div className='line'/>}        
      </React.Fragment>
  );
}