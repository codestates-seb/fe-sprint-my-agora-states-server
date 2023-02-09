import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
const options = { method: 'GET', headers: { accept: 'application/json' }};

let agoraDataArr;
 function agora() {
    return  fetch('http://localhost:4000/discussions', options)
      .then(response => agoraDataArr=response.json())
}

agora()
    .then(agoraDataArr => root.render(
      <App agoraDataArr={agoraDataArr} />
    ));

