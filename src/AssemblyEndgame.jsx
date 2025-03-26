import React from "react";
import data from "./languages.js";

const AssemblyEndgame = () => {
  const languages = data.map((chip) => (
    <span
      className="chip"
      style={{ background: chip.backgroundColor, color: chip.color }}
    >
      {chip.name}
    </span>
  ));
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
      <section className="languages">{languages}</section>
    </main>
  );
};
export default AssemblyEndgame;
