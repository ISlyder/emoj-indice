import "./App.css";
import React, { FunctionComponent } from "react";
import EmojiMovieQuiz from "./movie-quizz/movie-quizz";
import { Movie } from "./model/movie";
import questions from "./data/emoj'indice.json";

const App: FunctionComponent = () => {
  const movies: Movie[] = questions;
  return (
    <div className="App">
      <EmojiMovieQuiz movies={movies}></EmojiMovieQuiz>
    </div>
  );
};

export default App;
