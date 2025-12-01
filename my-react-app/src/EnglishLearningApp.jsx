import React, { useState } from "react";

export default function EnglishLearningApp() {
  const [answer, setAnswer] = useState("");
  const [corrected, setCorrected] = useState("");

  // Day 1 Vocabulary
  const vocabulary = [
    { word: "Achieve", meaning: "to successfully do something" },
    { word: "Improve", meaning: "to get better" },
    { word: "Confident", meaning: "believing in yourself" },
    { word: "Practice", meaning: "repeat to learn" },
    { word: "Fluent", meaning: "speak smoothly" },
    { word: "Habit", meaning: "something you do regularly" },
    { word: "Progress", meaning: "slow improvement" }
  ];

  // Auto-correction example logic
  function correctSentence() {
    let text = answer;

    text = text.replace(/\bi am\b/gi, "I am");
    text = text.replace(/\bme\b/gi, "I");
    text = text.replace(/\bgonna\b/gi, "going to");

    setCorrected(text);
  }

  return (
    <div style={{
      maxWidth: "700px",
      margin: "auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      
      <h1>English Learning App</h1>

      {/* Vocabulary Section */}
      <h2>Vocabulary (Day 1)</h2>
      <ul>
        {vocabulary.map((v, i) => (
          <li key={i}>
            <b>{v.word}</b> – {v.meaning}
          </li>
        ))}
      </ul>

      {/* Speaking / Writing Practice */}
      <h2>Speak / Write Practice</h2>
      <textarea
        rows="4"
        style={{ width: "100%", padding: "10px" }}
        placeholder="Type your answer…"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br /><br />
      <button
        onClick={correctSentence}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Correct My English
      </button>

      {corrected && (
        <p style={{ marginTop: "15px" }}>
          <b>Corrected:</b> {corrected}
        </p>
      )}
    </div>
  );
}
