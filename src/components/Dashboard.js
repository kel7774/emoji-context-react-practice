import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <header>Dashboard</header>
      <Link to="/listing">Listing Screen</Link>
    </div>
  );
};

export default Dashboard;
