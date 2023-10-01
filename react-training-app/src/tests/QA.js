import './../App.css';
import React from 'react';
import { dataList } from './../data/datalist.js';
import top from './../images/coffee_book_top.jpg';

const QA = () => {
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
