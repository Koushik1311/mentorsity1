import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import faqData from "./faqData";
import "animate.css/animate.min.css";
import "../index.css";

const FAQ = () => {
  // Initialize the selected category and selected question states
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonClicked(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Function to handle button click and filter data
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    setSelectedQuestion(null);
    setIsButtonClicked(true);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion((prevSelectedQuestion) =>
      prevSelectedQuestion === question ? null : question
    );
  };


  // Recursive function to render answer content
  const renderAnswer = (answer) => {

    // If answer is an array, render it as a list
    if (Array.isArray(answer)) {
      return (
        <div className="pl-4">
          {answer.map((item, index) => (
            <div key={index}>{renderAnswer(item)}</div>
          ))}
        </div>
      );
    } else if (typeof answer === "object") {

      // If answer is an object, render it as a nested structure
      return (
        <div className="pl-4">
          {Object.keys(answer).map((key, index) => (
            <div key={index}>
              <span className="font-semibold">{key}:</span>{" "}
              {renderAnswer(answer[key])}
            </div>
          ))}
        </div>
      );
    } else {

      // If answer is a string, render it as plain text
      return (
        <p
          className={`text-gray-700 mt-2 ${
            selectedQuestion === answer ? "bordered-answer" : ""
          }`}
        >
          {answer}
        </p>
      );
    }
  };


  return (
    // F.A.Q Container
    <div className="p-4 lg:ml-20 lg:mr-20 lg:p-12 md:p-8">

      {/* Button Container */}
      <div className="flex flex-wrap space-y-2 md:space-x-5 md:space-y-4 lg:mb-20 md:mb-6 justify-center items-baseline">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category
                ? "bg-yellow-400 text-sky-950"
                : "bg-gray-300 text-gray-700"
            } py-3 px-6 text-sm font-semibold rounded-2xl hover:bg-yellow-400 hover:text-sky-950 transition-colors mb-2`}
            onClick={() => handleButtonClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      
      {/* F.A.Q Questions Container */}
      <div
        className={`${
          isButtonClicked ? "animate__animated animate__zoomInUp" : ""
        }`}
      >
        {selectedCategory && (
          <div className="space-y-2">
            {faqData[selectedCategory].map((faq, index) => (
              <div
                key={index}
                className={`${
                  selectedQuestion === faq.question
                    ? "p-4"
                    : "p-4 border-solid border border-grey-100 transition-all hover:text-yellow-300 cursor-pointer"
                }`}
                onClick={() => handleQuestionClick(faq.question)
                }
              >
                <div className="flex items-center justify-between ">
                  <h3 className="pl-3 font-semibold hover:text-yellow-300">
                    {faq.question}
                  </h3>
                  <FontAwesomeIcon
                    icon={
                      selectedQuestion === faq.question ? null : faChevronRight
                    }
                    className="text-gray-500"
                  />
                </div>


                {/* F.A.Q Answers Box Related to the Question */}
                {selectedQuestion === faq.question && (
                  <div
                    className={`${
                      selectedQuestion === faq.question
                        ? "animate__animated animate__bounceInDown bg-white lg:mt-4 text-sm pl-3 pt-2 pb-4 pr-3 border-solid border border-grey-100"
                        : "animate__animated animate__backOutUp"
                    }`}
                  >
                    {renderAnswer(faq.answer)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;