import './../App.css';
import top from './../images/pillows.jpg';
import React from 'react';
import { dataList } from './../data/datalist.js';

const QA = () => {
  let Today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
  let day = new Date().toLocaleDateString('en-us', { day: 'numeric' });
  let month = new Date().toLocaleDateString('en-us', { month: 'short' });

  return (
    <>
      <div
        className="app-form-container"
        style={{
          backgroundImage: `url(${top})`,
          backgroundRepeat: 'repeat',
          opacity: 0.9,
        }}
      >
        <p>
          {`${Today},`} <span>{`${day} ${month}`}</span>
        </p>
        <h1>Questions & Answers</h1>
      </div>

      <QAList />
    </>
  );
};

const QAList = () => {
  return (
    <>
      <div className="data-card-container">
        <div className="data-card">
          Question & Answers
          <br />
        </div>
      </div>

      {dataList.map((question, index) => (
        <Card key={index} question={question} />
      ))}
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <div className="data-card-container">
        <div className="data-card">
          No: {props.question.id} <br />
          Question: {props.question.question} <br />
          Answer A: {props.question.answer_a} <br />
          Answer B: {props.question.answer_b} <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default QA;
