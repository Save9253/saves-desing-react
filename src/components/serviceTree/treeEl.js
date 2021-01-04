import React, { useState } from 'react';
import colors from '../colors'
import BtnWIcon from "../BtnWIcon";
import * as Icons from '../Icons'
import './ServiceTree.css'

const {ltGreen,mdGreen} = colors

export default function TreeElement(props) {
    const {ill,des,title,titleLevel,sel,setSel} = props
    let stat = false;
    if(setSel !== undefined && sel === des){stat = true}
    const [act,setAct] = useState(stat)
    return (
        <section className='c'>
            {titleLevel === 'h2' && <div className='rowC'>
                <Icons.Add size={20} color={ltGreen}/>
                <h2 style={{color:ltGreen}}>{title}</h2>
            </div>}
            {ill}
            <div className='rowC'>
                {titleLevel === 'h3' && <div className='rowC'>
                    <h3 style={{color:mdGreen,fontSize:20,margin:0,marginRight:5}}>{title}</h3>
                </div>}
                <BtnWIcon style={{height:45,padding:0}} color={mdGreen} Hcolor={ltGreen} active={setSel !== undefined?stat:act} icon="info" 
                onClick={()=>{
                    if(setSel !== undefined){
                        if(sel === des){setSel(null)}else{setSel(des)}
                    }else{
                        if(act){setAct(false)}else{setAct(true)}
                    }
                }}/>
                <BtnWIcon  style={{height:45,padding:0}} color={mdGreen} Hcolor={ltGreen} icon="add2cart" onClick={()=>{console.log(setSel !== undefined && sel === des);console.log('act '+act)}}/>
            </div>
            {titleLevel === 'h2' && <p className='unfoldInfo' style={{maxWidth:275,height:act?'100%':0,opacity:act?1:0}}>{des}</p>}
        </section>
    );
}