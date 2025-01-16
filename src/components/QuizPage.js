import { useState } from "react";

const QuizPage = ({quizdata,onFinished}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score,setScore] = useState(0);
  const quizArr = quizdata;
  const currentQuiz = quizArr[currentIdx];

  const handleAnswer = (answer)=>{    
    // if( answer === currentQuiz.correct ){      
    //   setScore( score+10 );
    // }
    const result = (answer === currentQuiz.correct) ? score+10 : score;
    if( currentIdx+1 < quizArr.length) {
      setScore(result);
      setCurrentIdx(currentIdx+1);
    } else {
      //종료상태      
      onFinished(result);
    }    
  }
  return (
    <div className="quiz-page">
      {/* 1번째 p태그로 문제 제출 , div태그 > button */}
      <p><strong>{currentIdx+1} / {quizArr.length}</strong></p>
      <p>{currentQuiz.question}</p>
      <div className="choices">
        {
          currentQuiz.choices.map( (txt,idx)=>{
            return <button 
                      key={idx}
                      onClick={()=>{handleAnswer(txt)}}
                    >{txt}</button>
          })
        }
      </div>
      <p>점수 : {score}</p>
    </div>
  );
};

export default QuizPage;