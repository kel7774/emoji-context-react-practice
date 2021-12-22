import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import ListingScreen from "./components/ListingScreen";

export default function App() {
  const [emojis, setEmojis] = React.useState([]);
  axios
    .get("https://emojihub.herokuapp.com/api/all")
    .then((response) => setEmojis(response.data))
    .catch((error) => console.log(error));

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/listing" element={<ListingScreen emojis={emojis} />} />
      </Routes>
    </div>
  );
}
