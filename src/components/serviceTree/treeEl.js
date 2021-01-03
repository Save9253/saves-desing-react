import React, { useState } from 'react';
import colors from '../colors'
import BtnWIcon from "../BtnWIcon";
import * as Icons from '../Icons'
import './ServiceTree.css'

const {ltGreen,mdGreen} = colors

export default function TreeElement(props) {
    const {ill} = props
    const [fold,setFold] = useState(true)
    return (
        <section className='c'>
            <div className='rowC'>
                <Icons.Add size={20} color={ltGreen}/>
                <h2 style={{color:ltGreen}}>Add Home Page</h2>
            </div>
            {ill}
            <div className='rowC'>
                <BtnWIcon style={{height:45}} color={mdGreen} Hcolor={ltGreen} active={fold} icon="info" onClick={()=>{
                if(fold){setFold(false)}else{setFold(true)}
                }}/>
                <BtnWIcon  style={{height:45}} color={mdGreen} Hcolor={ltGreen} icon="add2cart" />
            </div>
            <p className='unfoldInfo' style={{maxWidth:275,height:fold?0:'100%',opacity:fold?0:1}}>The home page includes a basic setup for your website, three sections with information, and a navigation bar.</p>
        </section>
    );
}