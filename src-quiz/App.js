import React,{useState} from 'react';
import './App.css';
function App() {
  const [currentquestion,setquestion]=useState(0)
  const [showscore,setshowscore]=useState(false)
  const [score,setScore]=useState(0)

  const set=[
    {
    questionno:1,
    questiontext:"what is the capital of India",
    answers:[
      {
        answertext:"Delhi",
        isCorrect:true
      },
      {
        answertext:"Mumbai",
        isCorrect:false
      },
      {
        answertext:"Hyderbad",
        isCorrect:false
      },
      {
        answertext:"Chennai",
        isCorrect:false
      }
    ]
    },
    {
      questionno:2,
      questiontext:"what is the capital of AP",
      answers:[
        {
          answertext:"Guntur",
          isCorrect:false
        },
        {
          answertext:"amravthi",
          isCorrect:false
        },
        {
          answertext:"Vizag",
          isCorrect:true
        },
        {
          answertext:"Anakapalli",
          isCorrect:false
        }
      ]
      }
  ]
  const handleclick=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nxtquest=currentquestion+1
    if(nxtquest<set.length)
    {
      setquestion(nxtquest)
    }
    else{
      setshowscore(true)
    }
  }
  
  return (
    <div className="App">
      {showscore?(<div className='score'>Your Score is {score}</div>):
       (<><div className='set'>
        <div className='questionsection'>Question {set[currentquestion].questionno}/<span className='spann'>{set.length}</span>
        <div className='Question-text'>{set[currentquestion].questiontext}:</div>
        <div className='answersection'>
          {
            set[currentquestion].answers.map((answer)=>(<button onClick={()=>handleclick(answer.isCorrect)}>{answer.answertext}</button>))
           
          }
        </div> 
        
        </div>
       </div></>)}
    </div>
  );
}

export default App;
