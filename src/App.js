import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import "firebase/database";
import React, {useState} from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyB_Hxjqux8Tpr19jNxTOpE5hXGacbyZgY4",
  authDomain: "test-b6177.firebaseapp.com",
  databaseURL: "https://test-b6177.firebaseio.com",
  projectId: "test-b6177",
  storageBucket: "test-b6177.appspot.com",
  messagingSenderId: "292285781425",
  appId: "1:292285781425:web:183acf5d0efa8243d51990"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database()

function App() {
  const [name,setName]=useState('wait...');
  const [once,setOnce]=useState(true)
  if(once){
    db.ref('Name').once('value').then(res =>{
      if(res.val()){
        setName(res.val())
      }
    })
    setOnce(false)
    console.log(once)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
