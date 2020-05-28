import React from "react";
import { Route } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return (
            <p>
              Jestes na <span>stronei glownej</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              Jestes na <span>{props.match.params.page}</span>,{" "}
              <span>{props.match.url}</span>, <span>{props.match.path}</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          return (
            <p>
              Jestes na <span>{props.match.params.idProduct}</span>,{" "}
              <span>{props.match.url}</span>, <span>{props.match.path}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
