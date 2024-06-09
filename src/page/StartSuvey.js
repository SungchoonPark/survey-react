import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Login.css"; // 기존 CSS 파일을 불러옵니다.

const StartSurvey = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const images = location.state.images;

  const startSurvey = () => {
    navigate("/survey", { state: { images } });
  };

  return (
    <div className="start-survey-container">
      <div className="start-survey-box">
        <h2>Start Survey</h2>
        <p>Click the button below to start the survey.</p>
        <button onClick={startSurvey} className="start-survey-button">
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default StartSurvey;
