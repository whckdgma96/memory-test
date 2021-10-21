import React, {useState} from 'react';
import './App.css';
export default App;

var ranNums = [];

const randFn = () => {
  var nums = [1,2,3,4,5,6,7,8,9];
  
  var i = nums.length;
  var j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(nums[j]);
      nums.splice(j,1); 
      }
  
   return ranNums;
};

function App() {
      
  const [ ans, setAns] = useState([]); 
  const handleClick = (e) => {
      e.preventDefault()
      setAns((cur)=>{
         const newAns = [...cur]
         newAns.push(e.target.value)
         return newAns
      })      
  
  };

  

  const Square = () => {
  return <div>
    <div className='board-row'>
      <button id ='1' className='square' value={ranNums[0]} onClick={handleClick}>{ranNums[0]}</button>
      <button id ='2' className='square' value={ranNums[1]} onClick={handleClick}>{ranNums[1]}</button>
      <button id ='3' className='square' value={ranNums[2]} onClick={handleClick}>{ranNums[2]}</button>
    </div>
    
    <div className='board-row'>
      <button id ='4' className='square' value={ranNums[3]} onClick={handleClick}>{ranNums[3]}</button>
      <button id ='5' className='square' value={ranNums[4]} onClick={handleClick}>{ranNums[4]}</button>
      <button id ='6' className='square' value={ranNums[5]} onClick={handleClick}>{ranNums[5]}</button>
    </div>

    <div className='board-row'>
      <button id ='7' className='square' value={ranNums[6]} onClick={handleClick}>{ranNums[6]}</button>
      <button id ='8' className='square' value={ranNums[7]} onClick={handleClick}>{ranNums[7]}</button>
      <button id ='9' className='square' value={ranNums[8]} onClick={handleClick}>{ranNums[8]}</button>
    </div>
    <button onClick={randFn}>시작</button>
    <div>입력한 버튼 : {ans}</div>

  </div>; }
    
  return (
    <div>
      <Square />

    </div>
    
  );

}