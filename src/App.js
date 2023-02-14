import "./App.css";
import Header from "./header";
import Home from "./home";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://media-content.ccbp.in/website/react-assignment/resources.json"
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Home data={data} />
    </div>
  );
}

export default App;
