import React, { useState } from 'react';
import * as Icons from './Icons'

export default function BtnWIcon(props){
    const {icon,color,title,Hcolor,style,onClick,active} = props
    const [col,setCol] = useState(color)
    function on(){
        setCol('white')
    }
    function off(){
        if(active === undefined){setCol(color)}else{                
            if(active){setCol(Hcolor)}else{setCol(color);}
        }
    }
    return(
        <button style={{...style,color:col}} className='icon' 
        onClick={()=>{
            if(onClick){
                onClick();
                if(active !== undefined){setCol(color)}else{
                    if(active){setCol(color)}else{setCol(Hcolor)}
                }
            }else{console.log('OnClick is not defined')}
            
        }} 
        onMouseEnter={()=>{on()}} 
        onMouseLeave={()=>{off()}}
        onFocus={()=>{on()}}
        onBlur={()=>{off()}}
        >
            {title}
            {icon === 'info' && <Icons.Info color={col}/>}
            {icon === 'add' && <Icons.Add color={col}/>}
            {icon === 'cart' && <Icons.Cart color={col}/>}
            {icon === 'add2cart' && <Icons.Add2Cart color={col}/>}
        </button>
    )
}