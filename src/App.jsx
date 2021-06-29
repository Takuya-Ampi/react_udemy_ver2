import React, { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickToggle = () => setOpen(!open);

  return (
    <>
      <div className="App">
        <input
          placeholder="入力してください"
          value={text}
          onChange={onChangeText}
        />
        <button onClick={onClickToggle}>{open && "非"}表示</button>
        <ChildArea open={open} />
      </div>
    </>
  );
}
