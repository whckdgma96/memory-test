import React from 'react';

function App() {
  const styles ={
    height:'150px',
    width:'150px',
    backgroundColor:'pink'
  };

  const square = () => {
  return <div>
    <div className='first-row'>
      <button id ='1'></button>
      <button id ='2' ></button>
      <button id ='3' ></button>
    </div>
    
    <div className='second-row'>
      <button id ='4' ></button>
      <button id ='5' ></button>
      <button id ='6' ></button>
    </div>

    <div className='third-row'>
      <button id ='7' ></button>
      <button id ='8' ></button>
      <button id ='9' ></button>
    </div>

  </div>;
    

  return (
    <div className="App">
      
      
      {square}
      
    </div>
  );
}

export default App;
