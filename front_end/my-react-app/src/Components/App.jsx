import React from 'react';
import ReactDOM from 'react-dom/client';
import AddMain from './Add_Main';
import DisplayMain from './Display_main';
import GraphMain from './Graph_Main';

function App() {

  return (
    <div className="App">
    {/* <GraphMain/> */}
    <DisplayMain/>
    <AddMain />     
    </div>
  );
}

export default App;
