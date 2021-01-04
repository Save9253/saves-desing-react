import React, {useState} from 'react';
import colors from '../colors'
import * as Icons from '../Icons'

const {mdGreen,ltGreen} = colors

export default function SideLine(props) {
    const {title,side,active,justify,setJustify} = props
    const [col,setCol] = useState(mdGreen)
    function on(focus){
        if(focus){
            setCol('white')
        }else{
            if(active === undefined){
                setCol(ltGreen)   
            }else{
                if(active){setCol(ltGreen)}else{setCol(mdGreen)}
            }
        }
    }
    function off(){
        if(active === undefined){setCol(mdGreen)}else{                
            if(active){setCol(mdGreen)}else{setCol(ltGreen)}
        }
    }
  return (
      <button style={{
          display:'grid',
          gridTemplateColumns:'20px 50px 20px',
          padding:0
      }}
        onMouseEnter={()=>{on()}} 
        onMouseLeave={()=>{off()}}
        onFocus={()=>{on('white')}}
        onBlur={()=>{off()}}
        className='side icon'
        onClick={()=>{
            if(side==='L'){
                if(justify==='center'){setJustify('start')}else{setJustify('center')}
            }
            if(side==='R'){
                if(justify==='center'){setJustify('end')}else{setJustify('center')}
            }
        }}
      >
        {side === 'L' ? 
        <div className='c sideLine' style={{borderLeftWidth:2,borderColor:col}}>
            <div className='line' style={{borderColor:col}}/>
        </div>
        :<div className='line' style={{borderColor:col}}/>}
        <div className='rowC' style={{transform:`rotate(${side === 'R' ? '-90' : '90'}deg)`,width:200,height:50,placeSelf:'center'}}>
            <Icons.Add size={20} color={col}/>
            <h2 style={{color:col}}>{title}</h2>
        </div>
        {side === 'R' ? 
        <div className='c sideLine' style={{borderRightWidth:2,borderColor:col}}>
            <div className='line' style={{borderColor:col}}/>
        </div>
        :<div className='line' style={{borderColor:col}}/>}        
      </button>
  );
}