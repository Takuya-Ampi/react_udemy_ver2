// import React, { useState, useCallback } from "react";
// import { ChildArea } from "./ChildArea";

import { BrowserRouter, Link } from "react-router-dom";

import "./styles.css";

import { Router } from "./router/Router";

export default function App() {
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);
  // const onChangeText = (e) => setText(e.target.value);
  // const onClickToggle = () => setOpen(!open);
  // const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* <div className="App">
        <input
          placeholder="入力してください"
          value={text}
          onChange={onChangeText}
        />
        <button onClick={onClickToggle}>{open && "非"}表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div> */}

      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </div>
        <Router />
      </BrowserRouter>
    </>
  );
}
