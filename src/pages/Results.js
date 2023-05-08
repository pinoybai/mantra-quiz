import React from 'react'
import { useSelector } from 'react-redux';
import { selectQuestions } from '../slices/quiz';
import { useNavigate } from 'react-router-dom';
import { Button, Paper } from '@mui/material';

function Results() {
    const questions = useSelector(selectQuestions);
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
    }
  return (
    <div>
        {questions.map((question, index) => {
          return (
            <Paper variant='outlined' className="questionItem">
                <div className="questionIndex">Question {index + 1}</div>
                <h2 className="LeftMargin">{question.question}</h2>
              <p>
                {question.userAnswer === question.correctAnswer && (
                    <>
                        <p className='LeftMargin'>Selected Answer: {question.answers[question.userAnswer]}</p>
                        <p className='redText boldText'>You have Selected Correct Answer !!</p>   
                    </>
                )}
                {question.userAnswer === null && <p className='blueText boldText'>User Did Not Attempted</p>}
                {question.userAnswer !== null && question.userAnswer !== question.correctAnswer && (
                    <>
                        <p className='redText'>The answer you have selected is Incorrect !!</p>
                        <p className='redText boldText'>Correct Answer is: {question.answers[question.correctAnswer]}</p>
                    </>
                )}
              </p>
            </Paper>
          )
        })}
        <p style={{textAlign: 'center'}}>
            <Button variant='outlined' onClick={() => goBack()} >Back to quiz</Button>
        </p>
    </div>
  )
}

export default Results