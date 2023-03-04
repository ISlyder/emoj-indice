import { Movie } from "../model/movie";
import React, { useState } from "react";
import "./movie-quizz.css";

interface Props {
  movies: Movie[];
}

const EmojiMovieQuiz: React.FC<Props> = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const handleNextButtonClick = () => {
    if (
      userAnswer.toLowerCase() === movies[currentMovieIndex].title.toLowerCase()
    ) {
      alert("Correct!");
      setCurrentMovieIndex(currentMovieIndex + 1);
      setUserAnswer("");
    } else {
      alert("Incorrect!");
    }
  };

  const validAnswerWhenEnterIsPressed = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleNextButtonClick();
    }
  };

  return (
    <>
      <h1>Emoji Movie Quiz</h1>
      <div className={"form-container"}>
        <span className={"emojis"}>{movies[currentMovieIndex].emojis}</span>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={(e) => {
            validAnswerWhenEnterIsPressed(e);
          }}
          placeholder="Entrez le titre du film"
        />
        <button onClick={handleNextButtonClick}>Valider</button>
      </div>
    </>
  );
};

export default EmojiMovieQuiz;
