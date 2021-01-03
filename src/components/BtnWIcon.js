import React, { useState } from 'react';
import * as Icons from './Icons'

export default function BtnWIcon(props){
    const {icon,color,title,Hcolor,style,onClick,active} = props
    const [col,setCol] = useState(color)
    return(
        <button style={{...style,color:col}} className='icon' 
        onClick={()=>{
            if(onClick){
                onClick();
                if(active !== undefined){setCol(Hcolor)}else{
                    if(active){setCol(Hcolor)}else{setCol(color)}
                }
            }else{console.log('OnClick is not defined')}
            
        }} 
        onMouseEnter={()=>{
            if(active === undefined){setCol(Hcolor)}else{
                if(active){setCol(Hcolor)}else{setCol(color)}
            }
        }} 
        onMouseLeave={()=>{
            if(active === undefined){setCol(color)}else{
                if(active){setCol(color)}else{setCol(Hcolor)}
            }
        }}
        >
            {title}
            {icon === 'info' && <Icons.Info color={col}/>}
            {icon === 'add' && <Icons.Add color={col}/>}
            {icon === 'cart' && <Icons.Cart color={col}/>}
            {icon === 'add2cart' && <Icons.Add2Cart color={col}/>}
        </button>
    )
}