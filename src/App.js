import { useState } from "react";
import './App.css';
import quizData from "./data/quizData";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
import Login from "./components/Login";

const App = () => {
  const [text,setText] = useState("");
  const [login,setLogin] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const handleFinish = (score) => {
    setLogin(true);
    setFinished(true);
    setScore(score);
  }
  const handleRestart = () => { 
    setFinished(false);
    setLogin(false);
  }
  const handlelogin = ()=>{
    setLogin(true);
  }
  const handleText = (txt)=>{
    setText(txt);
  }

  return (
    <div>
            {
        !login && (
          <Login
            onNexted={handlelogin}
            onText={handleText}
            />
        )
      }
      {
        login && !finished && (
          <QuizPage  
            quizdata={quizData.quizzes} 
            onFinished={handleFinish}/>
        )
      }
      {
        login && finished && (
          <Results text={text} score={score} onRestart={handleRestart}/>
        )
      }
    </div>
  );
};

export default App;