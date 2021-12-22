import "./styles.css";
import React from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import ListingScreen from "./components/ListingScreen";

export default function App() {
  const [emojis, setEmojis] = React.useState([]);
  const [, setError] = React.useState([]);

  const loadEmojis = React.useCallback(async () => {
    const response = await axios.get("https://emojihub.herokuapp.com/api/all");
    if (!response.data) {
      setError((error) => error);
    }
    setEmojis(response.data);
  }, []);

  React.useEffect(() => {
    loadEmojis();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/listing" element={<ListingScreen emojis={emojis} />} />
      </Routes>
    </div>
  );
}
