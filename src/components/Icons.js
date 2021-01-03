import React from 'react';

export function Cart(props){
    const {color,size} = props
    return(
        <svg style={{margin:5}} role="img" overflow="visible" aria-label="Cart" width={size ? size : "30"} viewBox="0 0 90 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5L15 10L30 55H75L85 25"/>
                <path d="M30 55L25 70H70"/>
                <circle cx="25" cy="75" r="5"/>
                <circle cx="70" cy="75" r="5"/>
                <path id="cartL1" opacity="1" d="M30 25H85"/>
                <path id="cartL2" opacity="1" d="M33 35H82"/>
                <path id="cartL3" opacity="1" d="M36 45H79"/>
            </g>
            <text className='cartText' x="35" y="45" style={{fontSize:0}} fill={color}>0</text>
        </svg>
    )
}
export function Add2Cart(props){
    const {color,size} = props
    return(
        <svg style={{margin:5}} role="img" overflow="visible" aria-label="Add to Cart" width={size ? size : "30"} viewBox="0 0 90 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5L15 10L30 55H75L85 25"/>
                <path d="M30 55L25 70H70"/>
                <circle cx="25" cy="75" r="5"/>
                <circle cx="70" cy="75" r="5"/>
            </g>
            <text x="33" y="50" style={{fontSize:70}} fill={color}>+</text>
        </svg>
    )
}
export function Info(props){
    const {color,size} = props
    return(
    <svg style={{margin:5}} width={size ? size : "28"} viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72 14L84 43L72 72L43 84L14 72L2 43L14 14L43 2L72 14Z" stroke={color} strokeWidth="4" strokeLinejoin="round"/>
        <text x="35" y="66" style={{fontSize:60}} fill={color}>i</text>
    </svg>
    )
}
export function Add(props){
    const {color,size} = props
    return(
    <svg style={{margin:5}} width={size ? size : "28"} viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72 14L84 43L72 72L43 84L14 72L2 43L14 14L43 2L72 14Z" stroke={color} strokeWidth="4" strokeLinejoin="round"/>
        <text x="22" y="69" style={{fontSize:78}} fill={color}>+</text>
    </svg>
    )
}

