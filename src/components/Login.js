
const Login = ({onNexted,onText}) => {
    return (
      <div className="login">
        <h3>맞춤법 퀴즈</h3>
        <div className="log-one">
        <p>반가워요!</p>
        <p>사용할 닉네임을 입력해주세요.</p>
        </div>
        <div className="log-two">
        <h1>저는 닉네임</h1>
        <div className="log-twot">
        <input type="text"
        onChange={(event)=>{onText(event.target.value);}}/>
        <h1>로</h1>
        </div>
        <h1>시작할래요</h1>
        </div>
          <button onClick={onNexted}>다음→</button>
      </div>
    );
};

export default Login;