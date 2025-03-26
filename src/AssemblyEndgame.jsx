import React from "react";
import { languages } from "./languages.js";
import { SassColor } from "sass";

const AssemblyEndgame = () => {
  const languageElements = languages.map((lang, index) => {
    const styles = {
      background: lang.backgroundColor,
      SassColor: lang.color,
    };
    return (
      <span className="chip" key={index} style={styles}>
        {lang.name}
      </span>
    );
  });
  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assemnly
        </p>
      </header>
      <section className="game-status">
        <h2>You win</h2>
        <p>Well done!</p>
      </section>
      <section className="language-chips">{languageElements}</section>
    </main>
  );
};
export default AssemblyEndgame;
