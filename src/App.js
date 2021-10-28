import React, {useEffect, useState} from 'react';
import './App.css';
export default App;

var ranNums = [];

function App() {
    const [newArray, setNewArray] = useState()
    const [score, setScore] = useState(0);
    

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

  const scoring = (event) => {
    event.preventDefault();
    const answersheet = [1,2,3,4,5,6,7,8,9];
    var tempscore= 100;
    for(var i=0; i<answersheet.length; i++){
      if(answersheet[i] !== parseInt(ans[i])){
        tempscore -= 10;
        console.log(answersheet[i], ans[i], tempscore);
      } else {}
    }setScore(tempscore); 
  }

  const [dis, setDis] = useState(false);
  useEffect(()=>{
    console.log(newArray);
    setTimeout(()=>{
      setDis(true);
    },5000)
  },[newArray])
  
  const [ ans, setAns] = useState([]); 
  const handleClick = (e) => {
      e.preventDefault()
      setAns((cur)=>{
         const newAns = [...cur]
         newAns.push(e.target.value)
         return newAns
      })      
      
      console.log(e.target.id);
      switch (e.target.id) {
        case '1':
          setClick1(true);
          setClick11("click");
          break;
          

        case '2':
          setClick2(true);
          setClick22("click");
          break;
        
        case '3':
          setClick3(true);
          setClick33("click");
          break;
          
        case '4':
          setClick4(true);
          setClick44("click");
          break;
        
        case '5':
          setClick5(true);
          setClick55("click");
          break;

        case '6':
          setClick6(true);
          setClick66("click");
          break;

        case '7':
          setClick7(true);
          setClick77("click");
          break;

        case '8':
          setClick8(true);
          setClick88("click");
          break;

        case '9':
          setClick9(true);
          setClick99("click");
          break;

        default :
          return 0
      };
      
      
         
  };
  
  const [click1, setClick1] = useState(false);
  const [click11, setClick11] = useState("");

  const [click2, setClick2] = useState(false);
  const [click22, setClick22] = useState("");

  const [click3, setClick3] = useState(false);
  const [click33, setClick33] = useState("");
  
  const [click4, setClick4] = useState(false);
  const [click44, setClick44] = useState("");

  const [click5, setClick5] = useState(false);
  const [click55, setClick55] = useState("");

  const [click6, setClick6] = useState(false);
  const [click66, setClick66] = useState("");

  const [click7, setClick7] = useState(false);
  const [click77, setClick77] = useState("");

  const [click8, setClick8] = useState(false);
  const [click88, setClick88] = useState("");

  const [click9, setClick9] = useState(false);
  const [click99, setClick99] = useState("");


  const Square = () => {
  return <div className='container'>
  <h2>기억력 테스트</h2>
  <h5>1. 시작 버튼을 누르고 5초 동안 숫자를 기억하세요!<br /><br />
  2. 기억에 따라 순서대로 숫자를 입력하세요.<br /><br />
  3. 채점을 눌러 결과를 확인하세요~<br /><br /></h5>
    <div className='board-row'>
      <button id ='1' className='square' value={ranNums[0]} onClick={handleClick}><div className={(dis?'disappear':'')+(click1?click11:"")}>{ranNums[0]}</div></button>
      <button id ='2' className='square' value={ranNums[1]} onClick={handleClick}><div className={(dis?'disappear':'')+(click2?click22:"")}>{ranNums[1]}</div></button>
      <button id ='3' className='square' value={ranNums[2]} onClick={handleClick}><div className={(dis?'disappear':'')+(click3?click33:"")}>{ranNums[2]}</div></button>
    </div>
    
    <div className='board-row'>
      <button id ='4' className='square' value={ranNums[3]} onClick={handleClick}><div className={(dis?'disappear':'')+(click4?click44:"")}>{ranNums[3]}</div></button>
      <button id ='5' className='square' value={ranNums[4]} onClick={handleClick}><div className={(dis?'disappear':'')+(click5?click55:"")}>{ranNums[4]}</div></button>
      <button id ='6' className='square' value={ranNums[5]} onClick={handleClick}><div className={(dis?'disappear':'')+(click6?click66:"")}>{ranNums[5]}</div></button>
    </div>

    <div className='board-row'>
      <button id ='7' className='square' value={ranNums[6]} onClick={handleClick}><div className={(dis?'disappear':'')+(click7?click77:"")}>{ranNums[6]}</div></button>
      <button id ='8' className='square' value={ranNums[7]} onClick={handleClick}><div className={(dis?'disappear':'')+(click8?click88:"")}>{ranNums[7]}</div></button>
      <button id ='9' className='square' value={ranNums[8]} onClick={handleClick}><div className={(dis?'disappear':'')+(click9?click99:"")}>{ranNums[8]}</div></button>
    </div>
    
    <h4>점수 : {score}점!</h4>
    <div className='buttons'>
      <button className='game' onClick={gameStart}>시작</button>
      <button className = 'score' onClick={scoring}>채점</button>
    </div>
    

  </div>; }
    
  return (
    <div>
      <Square />
      
    </div>
    
  );

}
