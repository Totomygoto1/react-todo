import './../App.css';
import React from 'react';

const Result = (props) => {
  return (
    <>
      {props.showResult ? (
        ''
      ) : (
        <div className="data-card-container">
          <div className="data-card">
            <button onClick={props.handleScore}>Get your Test Result</button>
          </div>
        </div>
      )}

      {props.showScore ? (
        ''
      ) : (
        <div className="data-card-container">
          <div className="data-card">
            <p>
              Your Test Result: {props.total} points <br />
              Your answers:
              {props.answers.map((currElement, index) => (
                <span key={index}>{currElement}</span>
              ))}
              <br />
              If you want to save your Test result , please add your details
              below.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
