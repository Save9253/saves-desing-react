import React from 'react';
import colors from '../colors'
import './ServiceTree.css'
import TreeElement from './treeEl';
import * as Ills from './Ills';
import SideLine from './sideLine'

const {mdGray} = colors

export default function ServiceTree(props) {
  return (
    <div style={{
        backgroundColor:mdGray,
        width:props.vw,
        display:'grid',
        placeContent:'center',
        padding:20,
        gridTemplateColumns:'auto 90px auto 90px auto',
    }}>
      <div className='sideEl'>
        <TreeElement title='Logo'
        ill={Ills.Logo(props={height:100})}
        titleLevel='h3'
        />
        <TreeElement title='Style'
        ill={Ills.Style(props={height:80})}
        titleLevel='h3'
        />
        <TreeElement title='Icon'
        ill={Ills.Icon(props={height:85})}
        titleLevel='h3'
        />
        <TreeElement title='Illustration'
        ill={Ills.Ills(props={height:85})}
        titleLevel='h3'
        />
      </div>
      <SideLine side="L" title="Add Graphics"/>
      <TreeElement title='Add Home Page'
      titleLevel='h2'
      ill={Ills.Home(props={height:"200"})}
      des='The home page includes a basic setup for your website, three sections with information, and a navigation bar.'
      />
      <SideLine side="R" title="Add Elements"/>
      <div className='sideEl'>
        <TreeElement title='Shop'
        ill={Ills.Cart(props={height:100})}
        titleLevel='h3'
        />
        <TreeElement title='Blog'
        ill={Ills.Blog(props={height:100})}
        titleLevel='h3'
        />
        <TreeElement title='Section'
        ill={Ills.Sec(props={height:60})}
        titleLevel='h3'
        />
        <TreeElement title='Form'
        ill={Ills.Form(props={height:80})}
        titleLevel='h3'
        />
      </div>
    </div>
  );
}