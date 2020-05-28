import React from "react";
import "../styles/header.css";
import img1 from "../img/header1.jpg";
import img2 from "../img/header2.jpg";
import img3 from "../img/header3.jpg";
import { Route, Switch } from "react-router-dom";

const Header = () => {
//   const images = [img1, img2, img3];
//   const index = Math.floor(Math.random() * 3);
//   const img = images[index];
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="miast0" />} />
        <Route
          path="/products"
          render={() => <img src={img2} alt="miast0" />}
        />
        <Route path="/contact" render={() => <img src={img2} alt="miast0" />} />
        <Route path="/admin" render={() => <img src={img3} alt="miast0" />} />
        <Route render={() => <img src={img1} alt="miast0" />} />
      </Switch>

      {/* <img src={img} alt="miasto" /> */}
      {/* pierwsze z statycznym dodawaniem obrazkow do kazdej sekcji a druga metoda z losowaniem obrazka */}
    </>
  );
};

export default Header;
