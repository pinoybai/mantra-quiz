import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestions, answer, reset } from '../slices/quiz';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, FormControlLabel, Paper, Radio, RadioGroup } from '@mui/material';

function Home() {

    const questions = useSelector(selectQuestions);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAnswer = (e, questionId) => {
        dispatch(answer({id: questionId, answer: Number(e.target.value)}));
    }

    const handleReset = () => {
        dispatch(reset());
    }

    const handleSubmit =  () => {
        navigate("/results")
    }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Quiz</h1>
        {questions.map((question, index) => {
          return (
            <Paper variant='outlined' className="questionItem">
            <div className="questionIndex">Question {index + 1}</div>
              <h2 className="leftMargin">{question.question}</h2>
              <div className="leftMargin">
                    <FormControl>
                        <RadioGroup
                            name={`question__${index+1}`} 
                            value={question.userAnswer ?? null}
                            onChange={(e) => {handleAnswer(e, index)}}
                        >
                            {question.answers.map((answer, i) => {
                                return <FormControlLabel value={i} control={<Radio />} label={answer} />
                            })}
                        </RadioGroup>
                    </FormControl>
              </div>
            </Paper>
          )
        })}
        <p style={{textAlign: 'center', margin: '10px 0', padding: '10px'}}>
            <Button variant='outlined' onClick={handleReset}>Reset</Button>
            <Button variant='outlined' onClick={handleSubmit} style={{marginLeft: '10px'}}>Submit</Button>
        </p>
    </div>
  )
}

export default Home