import React, { useState } from "react";
import Faq from "./Faq";
import useFaqSectionStore from "./store/useFaqSectionStore";

const FaqSection = () => {
  // const [questions, setQuestions] = useState();
  const {questions,setQuestion} = useFaqSectionStore();

  const toggleQuestion = (id) => {
    setQuestion(id);
  };

  return (
    <div className=" p-10">
      <div className="text-4xl font-bold mb-3">
        React Frequently Asked Questions
      </div>

      <div className="flex flex-col">
        {questions.map((question) => (
          <Faq
            toggleQuestion={toggleQuestion}
            key={question.id}
            faq={question}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;