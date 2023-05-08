import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
            question: 'What is the capital of America?',
            answers: ['New York City', 'Boston', 'Santa Fe', 'Washington DC'],
            correctAnswer: 3,
            userAnswer: null
        },
        {
            question: 'What year was the Constitution of America written?',
            answers: ['1787', '1776', '1774', '1826'],
            correctAnswer: 1,
            userAnswer: null
        },
        {
            question: 'Who was the second president of the US?',
            answers: ['John Adams', 'Paul Revere', 'Thomas jefferson', 'Benjamin Franklin'],
            correctAnswer: 0,
            userAnswer: null
        },
        {
            question: 'Which country is also known as the Land of Rising Sun?',
            answers: ['Japan', 'New Zealand', 'Fiji', 'China'],
            correctAnswer: 0,
            userAnswer: null
        },
        {
            question: 'In which country, white elephant is found?',
            answers: ['India', 'Thailand', 'Sri Lanka', 'Malaysia'],
            correctAnswer: 3,
            userAnswer: null
        },

    ]
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        answer: (state, action) => {
            state.questions = state.questions.map((v,i) => i === action.payload.id ? {...v, userAnswer: action.payload.answer} : v)
        },
        reset: (state, action) => {
            state.questions = initialState.questions;
        }
    }
})

export const {answer, reset} = quizSlice.actions;

export const selectQuestions = (state) => state.quiz.questions;

export default quizSlice.reducer;