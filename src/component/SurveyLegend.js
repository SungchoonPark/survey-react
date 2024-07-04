import React from "react";
import "../css/SurveyLegend.css";

const SurveyLegend = () => {
  return (
    <div className="survey-legend">
      <h2>카테고리 별 상세 예시</h2>
      <div className="legend-columns">
        <ul>
          <li>
            <span className="legend-title">TOP:</span>
            <ul className="sub-category">
              <li>티셔츠</li>
              <li>셔츠</li>
              <li>맨투맨</li>
              <li>스웨터</li>
              <li>니트</li>
              <li>기타</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">LEGGINGS & SOCKS:</span>
            <ul className="sub-category">
              <li>레깅스</li>
              <li>양말</li>
              <li>기타</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">OPS & SKIRT:</span>
            <ul className="sub-category">
              <li>원피스</li>
              <li>스커트</li>
              <li>기타</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <span className="legend-title">OUTER:</span>
            <ul className="sub-category">
              <li>패딩 자켓</li>
              <li>블레이저</li>
              <li>자켓</li>
              <li>조끼</li>
              <li>기타</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">PANTS:</span>
            <ul className="sub-category">
              <li>배기바지</li>
              <li>반바지</li>
              <li>청바지</li>
              <li>기타</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">SHOES & BAG & ACC:</span>
            <ul className="sub-category">
              <li>신발</li>
              <li>토트백</li>
              <li>악세사리</li>
              <li>기타</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">CARDIGAN:</span>
            <ul className="sub-category">
              <li>가디건</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SurveyLegend;
