import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Login.css";

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
        <h2>
          설문 참여 전에 확인 필수 :
          <br />
          설문 안내 사항
        </h2>
        <div className="survey-instructions">
          <ul>
            <li>
              주어진 이미지가 나타내고자 하는{" "}
              <span className="highlight">
                제품에 대한 만족도 (sentiment)을 골라주세요.{" "}
              </span>{" "}
              고객이 <span className="highlight">온라인 리뷰</span>에 텍스트와
              함께 올린 사진이란 점을 유념해주세요. (
              <span className="highlight">즉, 포토 리뷰의 포토입니다</span>
              ).
            </li>
            <li>
              <span className="highlight">데스크탑</span> 환경에서
              <span className="highlight"> 크롬</span>을 사용해주세요. 그렇지
              않으면 브라우저가 작동하지 않습니다.
            </li>
            <li>
              <span className="highlight">모든 질문</span>에 꼭 응답해주세요.
            </li>
            <li>
              페이지를{" "}
              <span className="highlight">새로고침하거나 뒤로가기</span>를
              누르게 되면,{" "}
              <span className="highlight">처음부터 설문을 다시 </span> 시작해야
              하니 유념해주세요.
            </li>
            <li>
              이미지가 로드될 때까지{" "}
              <span className="highlight">시간이 조금 걸릴 수 있습니다</span>.{" "}
              기다려주세요.
            </li>
          </ul>
        </div>
        <button onClick={startSurvey} className="start-survey-button">
          이해했습니다. 설문 참여하기
        </button>
      </div>
    </div>
  );
};

export default StartSurvey;
