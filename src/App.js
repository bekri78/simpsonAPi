import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CachedTwoToneIcon from "@material-ui/icons/CachedTwoTone";

import axios from "axios";
//import DisplayEmployee from "./components/DisplayEmployee";
//import sampleEmployee from "./components/Testemploye";
import RecipeReviewCard from "./components/Card/Card";
function App() {
  const [info, setInfo] = useState([]);
  const requete = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=9")
      .then((res) => {
        setInfo(res.data);
      });
  };
  useEffect(() => {
    requete();
  }, []);
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Simpson Quotes</h1>
      <CachedTwoToneIcon onClick={requete} style={{ cursor: "pointer" }} />
      <Row>
        {info.map((item, index) => (
          <RecipeReviewCard
            key={index}
            initial={item.character.charAt(0)}
            quotes={item.quote}
            img={item.image}
            title={item.character}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
