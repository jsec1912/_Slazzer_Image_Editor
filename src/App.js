import './App.css';
import React, { useState } from 'react';
import ImageEditorWrapper from './ImageEditorWrapper';

function App() {

  const src = 'https://cdn.scaleflex.it/demo/stephen-walker-unsplash.jpg';

  return (
    <div className="root">
      
      <ImageEditorWrapper
        show={true}
        src={src}
        onOpen={() => console.log('Editor is opened.')}
        onComplete={(props) => { console.log(props) }}
        onBeforeComplete={(props) => { console.log(props); return false; }}
      />
    </div>
  );
}

export default App;
