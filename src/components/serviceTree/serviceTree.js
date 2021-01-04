import React, { useState } from 'react';
import colors from '../colors'
import './ServiceTree.css'
import TreeElement from './treeEl';
import * as Ills from './Ills';
import SideLine from './sideLine'
import SideDes from './sideDes'

const {mdGray} = colors

export default function ServiceTree(props) {
  const [justify,setJustify]=useState('center')
  const [selL,setSelL] = useState(null)
  const [selR,setSelR] = useState(null)
  return (
    <div id='serviceTree'
    style={{
        backgroundColor:mdGray,
        width:props.vw,
        display:'grid',
        alignContent:'center',
        justifyContent:justify,
        padding:20,
        gridTemplateColumns:'250px 200px 90px 275px 90px 200px 250px',
    }}>
      <SideDes sel={selL} side='L'/>
      <div className='sideEl'>
        <TreeElement title='Logo'
        ill={Ills.Logo(props={height:100})}
        titleLevel='h3'
        sel={selL} setSel={setSelL}
        des="If your business doesn't have a logo yet, I could help with it too. A simple yet attractive logo will attract attention and represent your business's character and its main idea."
        />
        <TreeElement title='Style'
        ill={Ills.Style(props={height:80})}
        titleLevel='h3'
        sel={selL} setSel={setSelL}
        des="If your business doesn't have a defined style yet, I could help you develop one. This process includes finding a color scheme, shapes, fonts to represent the characteristics of your business."
        />
        <TreeElement title='Icon'
        ill={Ills.Icon(props={height:85})}
        titleLevel='h3'
        sel={selL} setSel={setSelL}
        des="If you are having a hard time finding icons that match your style and communicate the right message, then I could just make a custom icon for your specific need."
        />
        <TreeElement title='Illustration'
        ill={Ills.Ills(props={height:85})}
        titleLevel='h3'
        sel={selL} setSel={setSelL}
        des="If you are having a hard time finding illustrations that match your style and communicate the right message, then I could just make a custom illustration for your specific need."
        />
      </div>
      <SideLine side="L" title="Add Graphics" justify={justify} setJustify={setJustify}/>
      <TreeElement title='Add Home Page'
      titleLevel='h2'
      ill={Ills.Home(props={height:"200"})}
      des='The home page includes a basic setup for your website, three sections with information, and a navigation bar.'
      />
      <SideLine side="R" title="Add Elements" justify={justify} setJustify={setJustify}/>
      <div className='sideEl'>
        <TreeElement title='Shop'
        ill={Ills.Cart(props={height:100})}
        titleLevel='h3'
        sel={selR} setSel={setSelR}
        des="Can't find a shop builder that will showcase your products or services in a way you want it to? I can make a shop that will showcase your products or services in their full beauty and will allow your visitors to customize their orders any way you want them to. Don't be limited by the templates of shop builders anymore! With Save, you can do it just the way you want."
        />
        <TreeElement title='Blog'
        ill={Ills.Blog(props={height:100})}
        titleLevel='h3'
        sel={selR} setSel={setSelR}
        des="Can't find a blog template that suits your needs. I can make your blog truly yours and make it look and function just the way you want it to."
        />
        <TreeElement title='Section'
        ill={Ills.Sec(props={height:60})}
        titleLevel='h3'
        sel={selR} setSel={setSelR}
        des="Add an extra section to the existing page or add a whole extra page (with one section) to your website to provide more information to your visitors. A section can include some text with illustrations or other media."
        />
        <TreeElement title='Form'
        ill={Ills.Form(props={height:80})}
        titleLevel='h3'
        sel={selR} setSel={setSelR}
        des="Forms are used to collect data from your visitor. Examples could be a contact form, review, or survey."
        />
      </div>
      <SideDes sel={selR} side='R'/>
    </div>
  );
}