import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😀": "Grinning Face",
  "😳": "disbelief",
  "🤡": "Clown Face",
  "😔": "sad",
  "👍": "Thumbs Up",
  "🥡": "takeout box",
  "🔥": "Fire",
  "❤️": "love",
  "🥰": "Smiling Face with Hearts",
  "✍️": "Writing Hand",
  "😑": "annoyance"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Enter an emoji here to know the meaning"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
