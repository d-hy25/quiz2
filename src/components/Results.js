const Results = ({text,score,onRestart}) => {
  return (
    <div className="results">
        <div className="result-one">
          <h2>{text} 님 !</h2>
        </div>
        <div className="circle">
          <h2>총 점수</h2>
          <h1>{score}</h1>
          <span>점</span>
        </div>
      <button onClick={onRestart}>돌아가기</button>
    </div>
  );
};

export default Results;