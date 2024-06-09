import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Survey from "../page/Surveyy";
import "../css/Survey.css";

const SurveyContainer = () => {
  const location = useLocation();
  const images = location.state.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [surveyData, setSurveyData] = useState([]);

  const handleRatingChange = (rating) => {
    const currentImage = images[currentImageIndex];
    const newSurveyData = [...surveyData];
    const existingEntryIndex = newSurveyData.findIndex(
      (entry) => entry.imageId === currentImage.imageId
    );

    if (existingEntryIndex >= 0) {
      newSurveyData[existingEntryIndex].rating = rating;
    } else {
      newSurveyData.push({ imageId: currentImage.imageId, rating });
    }

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
      console.log(response.data); // 서버 응답 출력
      alert("Survey submit successful");
    } catch (error) {
      console.error("Error submitting survey data", error);
      alert("Survey submit failed");
    }
  };

  return (
    <Survey
      imageSrc={images[currentImageIndex].imageUrl}
      rating={
        surveyData.find(
          (entry) => entry.imageId === images[currentImageIndex].imageId
        )?.rating || ""
      }
      onRatingChange={handleRatingChange}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
      isLastImage={currentImageIndex === images.length - 1}
      isFirstImage={currentImageIndex === 0}
      currentIndex={currentImageIndex}
      totalImages={images.length}
    />
  );
};

export default SurveyContainer;
