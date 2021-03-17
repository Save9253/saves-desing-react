import React, {useState} from 'react';
import {colors} from './styles'
import Tag from './tag'

export default function Project(props) {
    const {title,bullets,img,tags,link} = props
    const [shadow,setShadow]=useState(1)
    const hrstyle = {borderColor:colors.white,borderWidth:1}
    return (
        <section style={{
        maxWidth:300,
        margin:10
        }}>
            <a href={link}
            style={{
                width:'100%',
                borderRadius:10,
                border:`solid 2px ${colors.org}`,
                padding:'10px 20px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                color:colors.white,
                transition:'none',  
                boxShadow:`${shadow}px ${shadow}px ${colors.black}`,
                transform:`translate(-${shadow/2}px,-${shadow/2}px)`,
            }}
            onMouseEnter={()=>{setShadow(5)}}
            onMouseLeave={()=>{setShadow(0)}}
            onFocus={()=>{setShadow(5)}}
            onBlur={()=>{setShadow(0)}}
            >
                <h3 style={{lineHeight:1.2}}>{title}</h3>
                <hr style={hrstyle}/>
                <div style={{display:'flex',alignItems:'center'}}>
                    {img && <img alt={title} src={img} style={{width:100,height:100,borderRadius:15}}/>}
                    {tags && <ul>
                    {tags.map(tag=><Tag key={tag} title={tag}/>)}
                    </ul>}
                </div>
                <hr style={hrstyle}/>
                {bullets && <ul>
                    {bullets.map(bullet=><li key={bullet.key}>{bullet.desc}</li>)}
                </ul>}  
            </a>
        </section>
    );
}