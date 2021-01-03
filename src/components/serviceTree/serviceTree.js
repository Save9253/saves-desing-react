import React from 'react';
import colors from '../colors'
import * as Icons from '../Icons'
import './ServiceTree.css'
import TreeElement from './treeEl';
import * as Ills from './Ills';
import SideLine from './sideLine'

const {mdGray,mdGreen} = colors

export default function ServiceTree(props) {
  return (
    <div style={{
        backgroundColor:mdGray,
        width:props.vw,
        display:'grid',
        placeContent:'center',
        padding:20,
        gridTemplateColumns:'20px 50px 20px auto 20px 50px 20px',
    }}>
      <SideLine side="L" title="Add Graphics"/>
      <TreeElement ill={Ills.Home(props={height:"200"})}/>
      <SideLine side="R" title="Add Elements"/>
    </div>
  );
}