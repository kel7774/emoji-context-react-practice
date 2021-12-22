import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListGroup = styled.ul`
  list-style: none;
`;

const ListPoints = styled.div`
  margin: 2em;
`;

const ListingScreen = ({ emojis }) => {
  return (
    <div>
      <header>Listing Screen</header>
      <Link to="/">Back</Link>
      <ListGroup>
        {emojis.map((emoji, key) => (
          <ListPoints key={key}>
            <li>{emoji.name}</li>
            <li>{emoji.category}</li>
            <li>{emoji.group}</li>
            <li>{emoji.unicode}</li>
            <li>{emoji.hmtlCode}</li>
          </ListPoints>
        ))}
      </ListGroup>
      <nav>
        <Link to="/">Back</Link>
      </nav>
    </div>
  );
};

export default ListingScreen;
