import React from 'react'
import Accordion from './components/Accordion'
import {accordionData} from './utils/accordion-data'

function App() {
  return (
    <div className="App">
    <Accordion options={accordionData}/>
    </div>
  );
}

export default App;
