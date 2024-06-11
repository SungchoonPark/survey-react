import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Survey.css";

const Survey = ({
  imageSrc,
  rating,
  category,
  onRatingChange,
  onNext,
  onPrevious,
  onSubmit,
  isLastImage,
  isFirstImage,
  currentIndex,
  totalImages,
  allSurveysCompleted,
}) => {
  const [localRating, setLocalRating] = useState(rating);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLocalRating(rating);
  }, [rating]);

  useEffect(() => {
    setLoading(true);
  }, [imageSrc]);

  const handleImageLoad = () => {
    setLoading(false);
  };

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
        if (!allSurveysCompleted) {
          setAlertMessage("Please complete all surveys before submitting.");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 2000);
          return;
        }
        try {
          await onSubmit();
          navigate("/complete");
        } catch (error) {
          console.error("Error submitting survey", error);
          setAlertMessage("Error submitting survey.");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 2000);
        }
      } else {
        onNext();
      }
    } else {
      setAlertMessage("Please select a rating.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    }
  };

  return (
    <div className="survey-container">
      {loading && <div className="spinner"></div>}
      <p className="category-text">
        <strong>Purchased Product:</strong> <br />
        <span className="category-highlight">{category}</span>
      </p>
      <img
        src={imageSrc}
        alt="Survey"
        className="survey-image"
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
      <p className="survey-progress">
        {currentIndex + 1} / {totalImages}
      </p>

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
            <span>Positive</span>
          </label>
          <label>
            <input
              type="radio"
              value="NEUTRAL"
              className="neutral"
              checked={localRating === "NEUTRAL"}
              onChange={handleChange}
            />
            <span>Neutral</span>
          </label>
          <label>
            <input
              type="radio"
              value="NEGATIVE"
              className="negative"
              checked={localRating === "NEGATIVE"}
              onChange={handleChange}
            />
            <span>Negative</span>
          </label>
        </div>
        <div className="navigation-buttons">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirstImage || loading}
            className="previous-button"
          >
            Previous
          </button>
          {isLastImage ? (
            <button type="submit" className="submit-button" disabled={loading}>
              Submit
            </button>
          ) : (
            <button type="submit" className="next-button" disabled={loading}>
              Next
            </button>
          )}
        </div>
      </form>
      {showAlert && <div className="alert">{alertMessage}</div>}
    </div>
  );
};

export default Survey;
