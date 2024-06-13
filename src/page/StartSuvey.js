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
          Check Before Starting the Survey:
          <br />
          Survey Instruction
        </h2>
        <div className="survey-instructions">
          <ul>
            <li>
              Please choose the sentiment{" "}
              <span className="highlight">regarding the purchased product</span>{" "}
              conveyed by the given image. Note that the image is posted by the
              user in an online review
            </li>
            <li>
              Please take the survey on{" "}
              <span className="highlight">Chrome</span>, using a{" "}
              <span className="highlight">desktop</span>.
            </li>
            <li>
              You must <span className="highlight">complete all surveys</span>.
            </li>
            <li>
              If you <span className="highlight">refresh</span> a page or{" "}
              <span className="highlight">go back</span> to the previous page,
              you will need to <span className="highlight">restart</span> the
              survey.
            </li>
            <li>
              Please <span className="highlight">wait</span> for the images to
              load.
            </li>
          </ul>
        </div>
        <button onClick={startSurvey} className="start-survey-button">
          I understand, Start Survey
        </button>
      </div>
    </div>
  );
};

export default StartSurvey;
