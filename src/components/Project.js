import React, {useState,useEffect, useLayoutEffect} from 'react';
import {colors} from './styles'

export default function Project(props) {
    const {title,bullets,img} = props
    return (
        <section style={{maxWidth:300}}>
            {img && <img alt={title} src={img} style={{width:100,height:100,borderRadius:15}}/>}
            <h3>{title}</h3>
            {bullets && <ul>
                {bullets.map(bullet=><li key={bullet.key}>{bullet.desc}</li>)}
            </ul>}  
        </section>
    );
}