import { useState } from 'react';
import './Question.scss';
import React from 'react';

export default function Question(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="question-wrap">
        {props.data.question && (
          <div className="question" onClick={toggleExpand}>
            {props.data.question}
          </div>
        )}
        {props.data.subQuestion && (
          <div className={`subQuestion ${isExpanded ? 'expanded' : ''}`}>
            {props.data.subQuestion.map((subQ, index) => (
              <div key={index}>
                <pre className="title">
                  <code>{subQ.title}</code>
                </pre>
                <pre className={`answer ${isExpanded ? 'expanded' : ''}`}>
                  <p>Answer:</p>
                  <code>{subQ.answer}</code>
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Question.defaultProps = {
  data: {
    question: '',
    subQuestion: '',
    answer: '',
  },
};
