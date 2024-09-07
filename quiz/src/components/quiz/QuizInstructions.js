import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import './QuizInstructions.css'; // Import the CSS file

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions - Quiz App</title>
    </Helmet>
    <div className='instructions-container'>
      <h1>How to Play the Game</h1>
      <p className='intro-text'>Make sure you read these instructions thoroughly before starting the quiz.</p>
      <ul className='instruction-list'>
        <li>The quiz has a total duration of <strong>30 minutes</strong>. The quiz will automatically end when the time elapses.</li>
        <li>Each quiz consists of <strong>15 questions</strong>. Make sure to answer all the questions before the time runs out.</li>
        <li>Each question comes with <strong>4 possible answers</strong>. Only one of these answers is correct.</li>
        <li>You can navigate between questions using the "Next" and "Previous" buttons.</li>
        <li>Your progress will be shown at the top of the quiz page.</li>
        <li>Once you submit the quiz, you will not be able to go back and change your answers.</li>
      </ul>
      <div className='images-section'>
        <h2>Example Images</h2>
        <div className='image-container'>
          <img src="https://via.placeholder.com/150" alt="Question example" className='example-image' />
          <img src="https://via.placeholder.com/150" alt="Answer options" className='example-image' />
        </div>
      </div>
      <p className='good-luck-text'>Good luck, and remember to manage your time wisely!</p>
    </div>
  </Fragment>
);

export default QuizInstructions;
