import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Style/Post.css";

export default function Post() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const [input, setInput] = useState({
    title: "",
    body: "",
  });

  const { title, body } = input;

  const handleClear = (e) => {
    e.preventDefault();

    setStatus(false);
    setInput({ title: "", body: "" });
  };

  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setStatus(true);

    console.log(input);
    Axios.post("https://jsonplaceholder.typicode.com/posts", input)
      .then((response) => {
        console.log(response);
        setData([...data, input]);
        setInput({ title: "", body: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>POST</h1>
      <form className="container">
        {status ? (
          <>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={handleOnChange}
            />
            <br />
            <input
              type="text"
              name="body"
              placeholder="body"
              value={body}
              onChange={handleOnChange}
            />
            <br />
          </>
        ) : null}
        <button onClick={handleAdd}>add</button>
        <button onClick={handleClear}>clear</button>
      </form>

      {console.log(data)}
      {data.map((el, idx) => {
        return (
          <React.Fragment key={idx}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
}
