import React, {useEffect, useState} from 'react';
import './App.css';
export default App;

var ranNums = [];

function App() {
    const [newArray, setNewArray] = useState()


    const gameStart = event => {
    event.preventDefault();

    var nums = [1,2,3,4,5,6,7,8,9];
  
    var i = nums.length;
    var j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(nums[j]);
      nums.splice(j,1); 
      }

      setNewArray(ranNums)

      
    return newArray
  }
  const [dis, setDis] = useState(false);
  useEffect(()=>{
    console.log(newArray);
    setTimeout(()=>{
      setDis(true);
    },3000)
  },[newArray])
  
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
      <button id ='1' className='square' value={ranNums[0]} onClick={handleClick}><div className={dis?'disappear':''}>{ranNums[0]}</div></button>
      <button id ='2' className='square' value={ranNums[1]} onClick={handleClick}><div className='disappear'>{ranNums[1]}</div></button>
      <button id ='3' className='square' value={ranNums[2]} onClick={handleClick}><div className='disappear'>{ranNums[2]}</div></button>
    </div>
    
    <div className='board-row'>
      <button id ='4' className='square' value={ranNums[3]} onClick={handleClick}><div className='disappear'>{ranNums[3]}</div></button>
      <button id ='5' className='square' value={ranNums[4]} onClick={handleClick}><div className='disappear'>{ranNums[4]}</div></button>
      <button id ='6' className='square' value={ranNums[5]} onClick={handleClick}><div className='disappear'>{ranNums[5]}</div></button>
    </div>

    <div className='board-row'>
      <button id ='7' className='square' value={ranNums[6]} onClick={handleClick}><div className='disappear'>{ranNums[6]}</div></button>
      <button id ='8' className='square' value={ranNums[7]} onClick={handleClick}><div className='disappear'>{ranNums[7]}</div></button>
      <button id ='9' className='square' value={ranNums[8]} onClick={handleClick}><div className='disappear'>{ranNums[8]}</div></button>
    </div>
    
    <div>입력한 버튼 : {ans}</div>
    <button onClick={gameStart}>시작</button>

  </div>; }
    
  return (
    <div>
      <Square />

    </div>
    
  );

}
