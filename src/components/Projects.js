import React, {useState,useEffect} from 'react';
import {colors} from './styles'

export default function Projects() {

  return (
      <section style={{
          backgroundColor:colors.mdGray,
          width:'100%',
          padding:'10px 20px',
          marginTop:20
      }}>
          <h2 style={{color:'#F79256'}}>Projects</h2>
      </section>
  );
}