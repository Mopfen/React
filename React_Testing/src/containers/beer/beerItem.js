import * as React from "react";

export const BeerItem = ({ name }) => {
    return (
      <li className="item">
          { name }
      </li>
    );
  };