import React, { useState } from "react";
import { languages } from "./languages.js";

const AssemblyEndgame = () => {
  const [currentWord, setCurrentWord] = useState("React");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardletter = alphabet
    .split("")
    .map((key, i) => <button key={i}>{key.toUpperCase()}</button>);

  const languageElements = languages.map((lang, index) => {
    const styles = {
      background: lang.backgroundColor,
      color: lang.name == "Python" || lang.name == "JavaScript" ? "#000" : null,
    };
    return (
      <span className="chip" key={index} style={styles}>
        {lang.name}
      </span>
    );
  });
  const letterElement = currentWord.split("").map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>;
  });

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
    </main>
  );
};
export default AssemblyEndgame;
