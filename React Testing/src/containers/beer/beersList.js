import * as React from "react";
import { BeerItem } from "./beerItem";

export class BeersList extends React.Component {
    beerToBeerItem = beer => {
      //const name = beer.phone;
      //const id = beer.login.username;
      const name = beer.name;
      const id = beer.name;
      return <BeerItem key={id} name = {name} />;
    };
  
    render() {
      return (
        <ul className="ui relaxed divided list selection">
          {this.props.beers.map(this.beerToBeerItem)}
        </ul>
      );
    }
  }