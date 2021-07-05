// import React, { useState, useCallback } from "react";
// import { ChildArea } from "./ChildArea";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./page1DetailB";
import { Page2 } from "./Page2";
import "./styles.css";

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/page1"
            render={() => (
              <Switch>
                <Route exact path="/page1">
                  <Page1 />
                </Route>
                <Route path="/page1/detailA">
                  <Page1DetailA />
                </Route>
                <Route path="/page1/detailB">
                  <Page1DetailB />
                </Route>
              </Switch>
            )}
          />
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
