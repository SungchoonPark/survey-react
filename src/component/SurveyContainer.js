import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Survey from "../page/Surveyy";
import SurveyLegend from "../component/SurveyLegend";
import "../css/Survey.css";

const SurveyContainer = () => {
  const location = useLocation();
  const images = location.state.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [surveyData, setSurveyData] = useState(Array(images.length).fill(null)); // 각 이미지의 설문 완료 여부를 추적하는 배열

  const handlePageChange = (pageNumber) => {
    setCurrentImageIndex(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 페이지 맨 위로 스크롤
  };

  const handleRatingChange = (rating) => {
    const currentImage = images[currentImageIndex];
    const newSurveyData = [...surveyData];
    newSurveyData[currentImageIndex] = {
      imageId: currentImage.imageId,
      rating,
      completed: true,
    };
    setSurveyData(newSurveyData);
  };

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (surveyData.some((survey) => survey === null)) {
      alert("Please complete all surveys before submitting.");
      return;
    }

    try {
      const response = await axios.post(
        "https://cspeak.shop/api/survey",
        surveyData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting survey data", error);
      alert("Survey submit failed");
    }
  };

  const renderSurveyButtons = () => {
    return images.map((_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index)}
        className={surveyData[index]?.completed ? "completed" : ""}
      >
        {index + 1}
      </button>
    ));
  };

  return (
    <div className="survey-container-wrapper">
      <div className="survey-content">
        <Survey
          imageSrc={images[currentImageIndex].imageUrl}
          rating={surveyData[currentImageIndex]?.rating || ""}
          category={images[currentImageIndex].category || ""}
          onRatingChange={handleRatingChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          isLastImage={currentImageIndex === images.length - 1}
          isFirstImage={currentImageIndex === 0}
          currentIndex={currentImageIndex}
          totalImages={images.length}
          allSurveysCompleted={!surveyData.some((survey) => survey === null)}
        />
        <div className="survey-buttons-container">{renderSurveyButtons()}</div>
      </div>
      <SurveyLegend />
    </div>
  );
};

export default SurveyContainer;
