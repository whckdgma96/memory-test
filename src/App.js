import React from 'react';
import './App.css';
export default App;

function App() {
  
  var nums = [1,2,3,4,5,6,7,8,9];
  var ranNums = [];
  var i = nums.length;
  var j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1); 
    } 
    
  

  const Square = () => {
  return <div>
    <div className='board-row'>
      <button id ='1' className='square'>{ranNums[0]}</button>
      <button id ='2' className='square'>{ranNums[1]}</button>
      <button id ='3' className='square'>{ranNums[2]}</button>
    </div>
    
    <div className='board-row'>
      <button id ='4' className='square'>{ranNums[3]}</button>
      <button id ='5' className='square'>{ranNums[4]}</button>
      <button id ='6' className='square'>{ranNums[5]}</button>
    </div>

    <div className='board-row'>
      <button id ='7' className='square'>{ranNums[6]}</button>
      <button id ='8' className='square'>{ranNums[7]}</button>
      <button id ='9' className='square'>{ranNums[8]}</button>
    </div>
    

  </div>; }
    
  return (
    <div>
      <Square />

    </div>
    
  );

}