import React from 'react';
export default App;

function App() {
  /*const styles ={
    height:'150px',
    width:'150px',
    backgroundColor:'pink'
  };*/

  const Square = () => {
  return <div>
    <div className='first-row'>
      <button id ='1'>1</button>
      <button id ='2'>2</button>
      <button id ='3'>3</button>
    </div>
    
    <div className='second-row'>
      <button id ='4' >4</button>
      <button id ='5' >5</button>
      <button id ='6' >6</button>
    </div>

    <div className='third-row'>
      <button id ='7' >7</button>
      <button id ='8' >8</button>
      <button id ='9' >9</button>
    </div>

  </div>;}
    
  return (
    <div>
      <Square />
    </div>
  );

}