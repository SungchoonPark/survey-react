import React from "react";
import "../css/AlreadyParticipated.css";

const AlreadyParticipated = () => {
  return (
    <div className="already-participated-container">
      <div className="already-participated-content">
        <div className="icon">
          <img
            src={`${process.env.PUBLIC_URL}/complete.png`}
            alt="already participated icon"
          />
        </div>
        <h1>이미 참여한 설문입니다.</h1>
        <p>감사합니다 </p>
      </div>
    </div>
  );
};

export default AlreadyParticipated;
