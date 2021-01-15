import React from 'react';

export function Cart(props){
    const {color,size} = props
    return(
        <svg style={{margin:5}} role="img" overflow="visible" aria-label="Cart" width={size ? size : "30"} viewBox="0 0 90 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg style={{margin:5}} role="img" overflow="visible" aria-label="Add to Cart" width={size ? size : "27"} viewBox="0 0 90 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5L15 10L30 55H75L85 25"/>
                <path d="M30 55L25 70H70"/>
                <circle cx="25" cy="75" r="5"/>
                <circle cx="70" cy="75" r="5"/>
                <path d="M37 25H67"/>
                <path d="M51 11V41"/>
            </g>
        </svg>
    )
}
export function Info(props){
    const {color,size} = props
    return(
    <svg style={{margin:5}} width={size ? size : "25"} viewBox="0 0 100 100" strokeLinecap="round" stroke={color} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" strokeWidth="5"/>
        <circle cx="50" cy="25" r="5" fill={color}/>
        <path d="M50 45V75" strokeWidth="8"/>
    </svg>
    )
}
export function Add(props){
    const {color,size} = props
    return(
    <svg style={{margin:5}} width={size ? size : "25"} viewBox="0 0 100 100" strokeLinecap="round" stroke={color} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" strokeWidth="5"/>
        <path d="M30 50H70" strokeWidth="8"/>
        <path d="M50 30V70" strokeWidth="8"/>
    </svg>
    )
}

