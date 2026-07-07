import { Link } from "react-router-dom";

const ResultPage = () => {
  return (
    <div className="quiz-container">
      <h1>
        퀴즈 결과
        <div className="result-section">
          <p> 수고하셨습니다! </p>
          <div className="button-group">
            <Link to="/" className="link-btn">
              다시 풀기
            </Link>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default ResultPage;
