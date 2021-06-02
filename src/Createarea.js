import React, { useState } from "react";
import "./styles.css";
function Createarea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handelchnge(event) {
    const { name, value } = event.target;
    setnote((pre) => {
      return { ...pre, [name]: value };
    });
  }
  function submitnote(event) {
    props.onAdd(note);
    event.preventDefault();
  }
  return (
    <form>
      <input
        value={note.title}
        onChange={handelchnge}
        name="title"
        type="text"
        placeholder="Title"
      />
      <textarea
        value={note.content}
        onChange={handelchnge}
        name="content"
        type="text"
        placeholder="Take a note..."
      />
      <button onClick={submitnote}>Add</button>
    </form>
  );
}
export default Createarea;
