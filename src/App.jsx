import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { StyledCompornents } from "./compornents/StyledCompornets";
import { StyledJsx } from "./compornents/StyledJsx";
import { Emotion } from "./compornents/Emotion";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <p>{text}</p>
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <StyledJsx />
      <StyledCompornents />
      <Emotion />
    </div>
  );
}
