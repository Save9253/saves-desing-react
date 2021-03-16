import React, {useState,useEffect, useLayoutEffect} from 'react';
import {colors} from './styles'

export default function Project(props) {
    const {title,bullets,img} = props
    const [shadow,setShadow]=useState(1)
    return (
        <section style={{
            maxWidth:300,
            borderRadius:10,
            border:`solid 2px ${colors.org}`,
            padding:20,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            color:colors.white,
            boxShadow:`${shadow}px ${shadow}px ${colors.black}`,
            transition:'500ms ease',
            transform:`translate(-${shadow/2}px,-${shadow/2}px)`
        }}
        onMouseEnter={()=>{setShadow(5)}}
        onMouseLeave={()=>{setShadow(0)}}
        onFocus={()=>{setShadow(5)}}
        onBlur={()=>{setShadow(0)}}
        >
            {img && <img alt={title} src={img} style={{width:100,height:100,borderRadius:15,justifySelf:'center'}}/>}
            <h3>{title}</h3>
            <hr style={{borderColor:colors.white}}/>
            {bullets && <ul>
                {bullets.map(bullet=><li key={bullet.key}>{bullet.desc}</li>)}
            </ul>}  
        </section>
    );
}