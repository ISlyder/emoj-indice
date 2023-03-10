import "./App.css";
import React, { FunctionComponent } from "react";
import EmojiMovieQuiz from "./movie-quizz/movie-quizz";
import { Movie } from "./model/movie";
import questions from "./data/emoj'indice.json";

const App: FunctionComponent = () => {
  const movies: Movie[] = questions.sort(() => Math.random() - 0.5);
  return (
    <div className={"app-container"}>
      <EmojiMovieQuiz movies={movies}></EmojiMovieQuiz>
    </div>
  );
};

export default App;
