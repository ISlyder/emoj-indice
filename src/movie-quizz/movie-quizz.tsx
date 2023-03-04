import { Movie } from "../model/movie";
import React, { useState } from "react";

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
    } else {
      alert("Incorrect!");
    }
    setCurrentMovieIndex(currentMovieIndex + 1);
    setUserAnswer("");
  };

  return (
    <div>
      <h1>Emoji Movie Quiz</h1>
      <div>
        <h2>{movies[currentMovieIndex].title}</h2>
        <div>{movies[currentMovieIndex].emojis}</div>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Entrez le titre du film"
        />
        <button onClick={handleNextButtonClick}>Suivant</button>
      </div>
    </div>
  );
};

export default EmojiMovieQuiz;
