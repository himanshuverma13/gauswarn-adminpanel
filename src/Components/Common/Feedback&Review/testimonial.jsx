import React, { useState, useEffect } from "react";
import "../../Assets/css/testimonial.css";

import { FeedbackAPI } from "../APIs/api";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Feedback, setFeedback] = useState();


  const FetchFeedback = async () => {
    try {
      const response = await FeedbackAPI();
      setFeedback(response);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    FetchFeedback();
  }, []);

  const totalCards = Feedback?.length;

  // Function to go to the next set of cards
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalCards - 2));
  };

  // Function to go to the previous set of cards
  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (totalCards - 2)) % (totalCards - 2)
    );
  };

  // Auto-slide function
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const color = ["primary", "success", "danger", "warning"];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math?.random() * color?.length);
    return color[randomIndex];
  };

  return (
    <div className="container mt-3">
      <div className="feedback-section px-3 py-4 bg-white">
        <div className="text-center">
          <h2>FEEDBACK</h2>
          <hr className="my-4 border border-secondary" />
        </div>
        <div className="card-slider">
          <div
            className="card-slider-inner py-2 row"
          >
            {Feedback?.map((card, index) => (
              <div className="card-wrapper col-lg-4 col-md-6 my-4" key={index}>
                <div className="card mb-3 h-100 shadow">
                  <div
                    className={`card-body feedback-card border-left border-${getRandomColor()}`}
                  >
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{card?.name}</h5>
                      <p>01/01/25</p>
                    </div>
                    <hr className="mt-0 mb-3" />
                    <p className="card-text">
                     {card?.feedback}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default TestimonialCarousel;
