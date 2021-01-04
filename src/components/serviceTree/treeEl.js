import React, { useState } from 'react';
import colors from '../colors'
import BtnWIcon from "../BtnWIcon";
import * as Icons from '../Icons'
import './ServiceTree.css'

const {ltGreen,mdGreen} = colors

export default function TreeElement(props) {
    const {ill,des,title,titleLevel} = props
    const [fold,setFold] = useState(true)
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
                <BtnWIcon style={{height:45,padding:0}} color={mdGreen} Hcolor={ltGreen} active={fold} icon="info" 
                onClick={()=>{
                    if(fold){setFold(false)}else{setFold(true)}
                }}/>
                <BtnWIcon  style={{height:45,padding:0}} color={mdGreen} Hcolor={ltGreen} icon="add2cart" />
            </div>
            {titleLevel === 'h2' && <p className='unfoldInfo' style={{maxWidth:275,height:fold?0:'100%',opacity:fold?0:1}}>{des}</p>}
        </section>
    );
}