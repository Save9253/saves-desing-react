import React, { useState } from 'react';

export default function SideDes(props) {
    const {sel,side} = props
  const [text,setText] = useState(null)
  const [M,setM] = useState(-250)
  const [O,setO] =useState(0)
  const [once,setOnce] = useState(true)
  if(sel !== text && once){
    setOnce(false)
    if(!text){
      setText(sel)
      setM(0)
      setO(1)
      setOnce(true)
    }else if(!sel){
      setM(-250)
      setO(0)
      setTimeout(()=>{
        setText(null)
        setOnce(true)
      },750)
    }else{
      setM(-250)
      setO(0)
      setTimeout(()=>{
        setText(sel)
        setM(0)
        setO(1)
        setOnce(true)
      },750)
    }
  }
  return (
    <div className='c'>
        <p className='sel'
        style={{opacity:O,marginLeft:side==='R'&&M,marginRight:side==='L'&&M}}>
          {text}
        </p>
    </div>
  );
}