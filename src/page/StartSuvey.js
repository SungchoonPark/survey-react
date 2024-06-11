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
              Please choose the <span className="highlight">sentiment</span>{" "}
              conveyed by the given image. Note that the image is posted by the
              user in an <span className="highlight">online review</span>.
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
              If you page <span className="highlight">refresh</span> or{" "}
              <span className="highlight">go back</span>, you will need to start
              the survey <span className="highlight">again</span>.
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
