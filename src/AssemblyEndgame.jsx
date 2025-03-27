import React, { useState } from "react";
import { languages } from "./languages.js";
import { clsx } from "clsx";

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetter, setGuessedLetter] = useState([]);

  const wrongGuessCount = guessedLetter.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  console.log(wrongGuessCount);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const handleClick = (letter) => {
    setGuessedLetter((c) => (c.includes(letter) ? c : [...c, letter]));
  };

  const keyboardletter = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetter.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        key={letter}
        onClick={() => handleClick(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const languageElements = languages.map((lang, index) => {
    const isLanguageLost = index < wrongGuessCount;
    const styles = {
      background: lang.backgroundColor,
      color: lang.name == "Python" || lang.name == "JavaScript" ? "#000" : null,
    };
    return (
      <span
        className={`chip ${isLanguageLost ? "lost" : ""}`}
        key={index}
        style={styles}
      >
        {lang.name}
      </span>
    );
  });
  const letterElement = currentWord.split("").map((letter) => {
    return (
      <span key={letter}>
        {guessedLetter.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    );
  });
  console.log(letterElement[2]);

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly
        </p>
      </header>
      <section className="game-status">
        <h2>You win</h2>
        <p>Well done!</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElement}</section>
      <section className="keyboard">{keyboardletter}</section>
      <button className="new-game">New Game</button>
    </main>
  );
};
export default AssemblyEndgame;
