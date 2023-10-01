import './../App.css';
import React from 'react';

const NextQuestion = (props) => {
  return (
    <>
      {!props.showNext ? (
        ''
      ) : (
        <>
          <div className="data-card-container">
            <div className="data-card">
              <button onClick={props.handleNext}>Next question</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NextQuestion;
