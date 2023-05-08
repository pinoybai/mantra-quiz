import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../slices/quiz";

export const store = configureStore({
    reducer: {
        quiz: quizReducer
    }
})