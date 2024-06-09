import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Survey.css";

const Survey = ({
  imageSrc,
  rating,
  onRatingChange,
  onNext,
  onPrevious,
  onSubmit,
  isLastImage,
  isFirstImage,
  currentIndex,
  totalImages,
}) => {
  const [localRating, setLocalRating] = useState(rating);
  const navigate = useNavigate();

  useEffect(() => {
    setLocalRating(rating);
  }, [rating]);

  const handleChange = (event) => {
    const newRating = event.target.value;
    setLocalRating(newRating);
    onRatingChange(newRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (localRating) {
      onRatingChange(localRating);
      if (isLastImage) {
        try {
          await onSubmit();
          navigate("/complete"); // 완료 페이지로 이동
        } catch (error) {
          console.error("Error submitting survey", error);
          alert("Error submitting survey");
        }
      } else {
        onNext();
      }
    } else {
      alert("Please select a rating.");
    }
  };

  return (
    <div className="survey-container">
      <p className="survey-progress">
        {currentIndex + 1} / {totalImages}
      </p>
      <img src={imageSrc} alt="Survey" className="survey-image" />
      <form onSubmit={handleSubmit} className="survey-form">
        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              value="POSITIVE"
              className="positive"
              checked={localRating === "POSITIVE"}
              onChange={handleChange}
            />
            Positive
          </label>
          <label>
            <input
              type="radio"
              value="NEUTRAL"
              className="neutral"
              checked={localRating === "NEUTRAL"}
              onChange={handleChange}
            />
            Neutral
          </label>
          <label>
            <input
              type="radio"
              value="NEGATIVE"
              className="negative"
              checked={localRating === "NEGATIVE"}
              onChange={handleChange}
            />
            Negative
          </label>
        </div>
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirstImage}
            className="previous-button"
          >
            Previous
          </button>
          {isLastImage ? (
            <button type="submit" className="submit-button">
              Submit
            </button>
          ) : (
            <button type="submit" className="next-button">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Survey;
