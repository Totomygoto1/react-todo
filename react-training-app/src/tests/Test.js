import './../App.css';
import top from './../images/coffee_book_top.jpg';
import React from 'react';
import { dataList } from './../data/datalist.js';
import { useState } from 'react';
import Timer from './../components/Timer.js';
import Question from './../components/Question.js';
import NextQuestion from './../components/NextQuestion.js';
import Result from './../components/Result.js';
import AddUserResult from './../components/AddUserResult.js';

const Test = () => {
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
        <h1>Do a Test</h1>
      </div>
      <TestPanel />
    </>
  );
};

const TestPanel = () => {
  let [index, setIndex] = useState(0);
  let [showResult, setshowResult] = useState(true);
  let [showScore, setshowScore] = useState(true);
  let [showNext, setshowNext] = useState(true);

  let testResult = 0;
  let [total, setTotal] = useState(0);

  let [answers, setAnswers] = useState([]);
  let correctAnswers = ['4b', '3b', '2b', '1a'];

  let id = dataList[index].id;
  let question = dataList[index].question;
  let answer_a = dataList[index].answer_a;
  let answer_b = dataList[index].answer_b;

  const handleScore = () => {
    for (let i = 0; i < dataList.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        testResult += 1;
      }
    }

    setTotal(testResult);

    setshowScore(false);

    setshowNext(false);
  };

  const handleNext = () => {
    if (index === dataList.length - 1) {
      setIndex(index);
      setshowResult(false);
    } else {
      setIndex(index + 1);
    }

    handleSave();
  };

  const handleSave = () => {
    let answ = document.forms[0];

    if (answ[0].checked) {
      setAnswers([id + 'a', ...answers]);
    }

    if (answ[1].checked) {
      setAnswers([id + 'b', ...answers]);
    }
  };

  return (
    <>
      <Question
        id={id}
        question={question}
        answer_a={answer_a}
        answer_b={answer_b}
      />

      <div className="data-card-container">
        <div className="data-card">
          <Timer />
        </div>
      </div>

      <Result
        showResult={showResult}
        handleScore={handleScore}
        showScore={showScore}
        total={total}
        answers={answers}
      />

      {showScore ? '' : <AddUserResult total={total} />}

      <NextQuestion handleNext={handleNext} showNext={showNext} />
    </>
  );
};

export default Test;
