import React from "react";
import "./styles.css";
import { useState } from "react";

const musicCOLLECTION = {
  IndianPop: [
    { name: "Dheere Dheere Se Meri Zindagi", rating: " ⭐:4.5/5" },
    { name: "Gur Nalo Ishq Mitha", rating: "⭐:5/5" },
    { name: "Lahore", rating: "⭐:4/5" }
  ],

  PopRock: [
    { name: "Sweet But Psycho", rating: "⭐:4.8/5" },
    { name: "Let Me Love You", rating: "⭐:5/5" },
    { name: "Shape of You", rating: "⭐:4.5/5" }
  ],

  HipHop: [
    { name: "Panda", rating: "⭐:4.4/5" },
    { name: "Taki Taki", rating: "⭐:4.5/5" },
    { name: "All the way up", rating: "⭐:5/5" }
  ]
};

const musicWeHave = Object.keys(musicCOLLECTION);

export default function App() {
  const [selectedMusic, setMusic] = useState("HipHop");
  function genreClickHandler(music) {
    setMusic(music);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        <span> 🎶</span>Best Music Collection{" "}
      </h1>
      <p>
        {" "}
        Checkout my favourite music below <span> 👇🏻</span>. Select a genre to
        get strated.
      </p>

      {musicWeHave.map((music) => (
        <button
          onClick={() => genreClickHandler(music)}
          key={music}
          style={{
            cursor: "pointer",
            background: "#E5E7EB",
            borderRadius: "0.5rem",
            padding: "0.8rem  1.4rem",
            border: "1px solid black",
            margin: "1rem 0.3rem"
          }}
        >
          {music}
        </button>
      ))}
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicCOLLECTION[selectedMusic].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", padding: "0.2rem" }}>
                {" "}
                {music.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.2rem" }}>
                {" "}
                {music.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
