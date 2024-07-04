import React from "react";
import "../css/SurveyComplete.css";

const SurveyComplete = () => {
  return (
    <div className="complete-container">
      <div className="complete-content">
        <div className="icon">
          <img
            src={`${process.env.PUBLIC_URL}/complete.png`}
            alt="completion icon"
          />
        </div>
        <h1>설문이 종료되었습니다.</h1>
        <p>
          설문에 참여해주셔서 감사합니다. <br />
          응답이 기록되었습니다.
        </p>
        <a
          href="https://forms.office.com/r/fAVMeNyH6X"
          className="survey-button"
        >
          추가 설문 하러 가기
        </a>
        <p className="survey-time">소요 시간: 1분 내외</p>
      </div>
    </div>
  );
};

export default SurveyComplete;
