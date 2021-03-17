import React from 'react';
import {colors} from './styles'

export default function Tag(props) {
    const {title} = props
    return (
        <li style={{marginBlockEnd:5,listStyleType:'none'}}>
            <div style={{color:colors.org,fontSize:14}}>{title}</div>
        </li>
    );
}