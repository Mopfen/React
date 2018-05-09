import * as React from "react";

export const BeerItem = ({ name }) => {
    return (
      <li className="item">
          <h4>{ name }</h4>
      </li>
    );
  };