import React from 'react';
import {colors} from './styles'
import Project from './Project'

export default function Projects() {

    return (
        <section style={{
            backgroundColor:colors.mdGray,
            width:'100%',
            padding:'10px 20px',
            marginTop:20
        }}>
            <h2 style={{color:colors.org,textAlign:'center'}}>Projects</h2>
            <div>
                <Project
                title='PartyLive'
                bullets={[
                    {key:'book',desc:'Helps event hosts to find venues and entertainment.'},
                    {key:'mus',desc:'Helps talented musicians and bands to earn money by performing at events.'},
                    {key:'ven',desc:'Helps venue owners to earn money by renting out their venues through the app.'},
                ]}
                img={require('../assets/PartyLiveFavicon.png').default}
                />
            </div>
        </section>
    );
}