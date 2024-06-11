import React from "react";
import "../css/SurveyLegend.css";

const SurveyLegend = () => {
  return (
    <div className="survey-legend">
      <h2>Product Category Legend</h2>
      <div className="legend-columns">
        <ul>
          <li>
            <span className="legend-title">TOP:</span>
            <ul className="sub-category">
              <li>t-shirts</li>
              <li>shirts</li>
              <li>sweatshirts</li>
              <li>sweaters</li>
              <li>etc.</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">LEGGINGS & SOCKS:</span>
            <ul className="sub-category">
              <li>tights</li>
              <li>socks</li>
              <li>etc.</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">OPS & SKIRT:</span>
            <ul className="sub-category">
              <li>dress</li>
              <li>skirts</li>
              <li>etc.</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <span className="legend-title">OUTER:</span>
            <ul className="sub-category">
              <li>padded jackets</li>
              <li>vests</li>
              <li>jackets</li>
              <li>etc.</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">PANTS:</span>
            <ul className="sub-category">
              <li>baggy pants</li>
              <li>jeans</li>
              <li>shorts</li>
              <li>etc.</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">SHOES & BAG & ACC:</span>
            <ul className="sub-category">
              <li>shoes</li>
              <li>tote bags</li>
              <li>sneakers</li>
              <li>etc.</li>
            </ul>
          </li>
          <li>
            <span className="legend-title">CARDIGAN:</span>
            <ul className="sub-category">
              <li>cardigans</li>
              <li>etc.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SurveyLegend;
