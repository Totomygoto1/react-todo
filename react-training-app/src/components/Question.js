import './../App.css';
import React from 'react';

const Question = (props) => {
  return (
    <>
      <form>
        <div className="data-card-container">
          <div className="data-card">
            {props.id} {props.question}
            <br />
          </div>
        </div>

        <div className="data-card-container">
          <div className="data-card">
            a.) <input type="radio" id="box1" name="box" value="a" />
            {props.answer_a}
          </div>
        </div>

        <div className="data-card-container">
          <div className="data-card">
            b.) <input type="radio" id="box2" name="box" value="b" />
            {props.answer_b}
          </div>
        </div>
      </form>
    </>
  );
};

export default Question;
