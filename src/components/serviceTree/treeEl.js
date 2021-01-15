import React, { useState } from 'react';
import colors from '../colors'
import * as Icons from '../Icons'
import * as Ills from './Ills';
import './ServiceTree.css'

const {ltGreen,mdGreen} = colors

export default function TreeElement(props) {
    const {ill,des,title,titleLevel,sel,setSel} = props
    let stat = false;
    if(setSel !== undefined && sel === des){stat = true}
    const [act,setAct] = useState(stat)
    const [color,setColor]=useState(mdGreen)
    return (
        <button className='c icon'
        onMouseEnter={()=>{setColor('white')}}
        onMouseLeave={()=>{if(act){setColor(ltGreen)}else{setColor(mdGreen)}}}
        onFocus={()=>{setColor('white')}}
        onBlur={()=>{if(act){setColor(ltGreen)}else{setColor(mdGreen)}}}
        onClick={()=>{
            if(setSel !== undefined){
                if(sel === des){setSel(null)}else{setSel(des)}
            }else{
                if(act){setAct(false)}else{setAct(true)}
            }
        }}>
            {titleLevel === 'h2' && <div className='rowC'>
                <Icons.Add size={20} color={ltGreen}/>
                <h2 style={{color:ltGreen}}>{title}</h2>
            </div>}
            {ill === 'Logo' && <Ills.Logo height="80" focus={color==='white'?true:false}/>}
            {ill === 'Style' && <Ills.Style height="80" focus={color==='white'?true:false}/>}
            {ill === 'Icon' && <Ills.Icon height="85" focus={color==='white'?true:false}/>}
            {ill === 'Ills' && <Ills.Ills height="85" focus={color==='white'?true:false}/>}
            {ill === 'Home' && <Ills.Home height="200" focus={color==='white'?true:false}/>}
            {ill === 'Cart' && <Ills.Cart height="100" focus={color==='white'?true:false}/>}
            {ill === 'Blog' && <Ills.Blog height="100" focus={color==='white'?true:false}/>}
            {ill === 'Sec' && <Ills.Sec height="60" focus={color==='white'?true:false}/>}
            {ill === 'Form' && <Ills.Form height="80" focus={color==='white'?true:false}/>}
            <div className='rowC'>
                {titleLevel === 'h3' && <div className='rowC'>
                    <h3 style={{color:color,fontSize:20,margin:0,marginRight:5,transition:'500ms ease'}}>{title}</h3>
                </div>}
            </div>
            {titleLevel === 'h2' && <p className='unfoldInfo' style={{maxWidth:275,height:act?'100%':0,opacity:act?1:0}}>{des}</p>}
        </button>
    );
}