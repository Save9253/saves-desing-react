import React, { useState } from 'react';
import colors from '../colors'
import './ServiceTree.css'
import TreeElement from './treeEl';
import SideLine from './sideLine'
import SideDes from './sideDes'

const {mdGray} = colors

export default function ServiceTree(props) {
  const {vw} = props
  const [ML,setML]=useState(0)
  const [MR,setMR]=useState(0)
  const [selL,setSelL] = useState(null)
  const [selR,setSelR] = useState(null)
  return (
    <div style={{
      backgroundColor:mdGray,
          width:vw,
          display:'grid',
          alignContent:'center',
    }}>
      <div id='serviceTree'
      style={{
          display:'grid',
          position:'relative',
          marginLeft:ML,
          marginRight:MR,
          justifyContent:'center',
          padding:20,
          gridTemplateColumns:'250px 200px 90px 275px 90px 200px 250px',
      }}>
        <SideDes sel={selL} side='L'/>
        <div className='sideEl'>
          <TreeElement title='Logo'
          ill='Logo'
          titleLevel='h3'
          sel={selL} setSel={setSelL}
          des="If your business doesn't have a logo yet, I could help with it too. A simple yet attractive logo will attract attention and represent your business's character and its main idea."
          />
          <TreeElement title='Style'
          ill='Style'
          titleLevel='h3'
          sel={selL} setSel={setSelL}
          des="If your business doesn't have a defined style yet, I could help you develop one. This process includes finding a color scheme, shapes, fonts to represent the characteristics of your business."
          />
          <TreeElement title='Icon'
          ill='Icon'
          titleLevel='h3'
          sel={selL} setSel={setSelL}
          des="If you are having a hard time finding icons that match your style and communicate the right message, then I could just make a custom icon for your specific need."
          />
          <TreeElement title='Illustration'
          ill='Ills'
          titleLevel='h3'
          sel={selL} setSel={setSelL}
          des="If you are having a hard time finding illustrations that match your style and communicate the right message, then I could just make a custom illustration for your specific need."
          />
        </div>
        <SideLine side="L" title="Add Graphics" vw={vw} ML={ML} setML={setML} MR={MR} setMR={setMR}/>
        <TreeElement title='Add Home Page'
        titleLevel='h2'
        ill='Home'
        des='The home page includes a basic setup for your website, three sections with information, and a navigation bar.'
        />
        <SideLine side="R" title="Add Elements" vw={vw} ML={ML} setML={setML} MR={MR} setMR={setMR}/>
        <div className='sideEl'>
          <TreeElement title='Shop'
          ill='Cart'
          titleLevel='h3'
          sel={selR} setSel={setSelR}
          des="Can't find a shop builder that will showcase your products or services in a way you want it to? I can make a shop that will showcase your products or services in their full beauty and will allow your visitors to customize their orders any way you want them to. Don't be limited by the templates of shop builders anymore! With Save, you can do it just the way you want."
          />
          <TreeElement title='Blog'
          ill='Blog'
          titleLevel='h3'
          sel={selR} setSel={setSelR}
          des="Can't find a blog template that suits your needs. I can make your blog truly yours and make it look and function just the way you want it to."
          />
          <TreeElement title='Section'
          ill='Sec'
          titleLevel='h3'
          sel={selR} setSel={setSelR}
          des="Add an extra section to the existing page or add a whole extra page (with one section) to your website to provide more information to your visitors. A section can include some text with illustrations or other media."
          />
          <TreeElement title='Form'
          ill='Form'
          titleLevel='h3'
          sel={selR} setSel={setSelR}
          des="Forms are used to collect data from your visitor. Examples could be a contact form, review, or survey."
          />
        </div>
        <SideDes sel={selR} side='R'/>
      </div>
    </div>
  );
}