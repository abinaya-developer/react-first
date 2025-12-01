import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(text);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Simple React App</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleClick} style={styles.button}>
        Show Text
      </button>

      {result && <h2 style={styles.output}>You typed: {result}</h2>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial",
  },
  heading: {
    color: "#333",
  },
  input: {
    width: "250px",
    padding: "10px",
    fontSize: "16px",
    marginTop: "20px",
  },
  button: {
    marginLeft: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  output: {
    marginTop: "30px",
    color: "green",
  },
};

export default App;
