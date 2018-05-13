import * as React from "react";
import { BeerItem } from "./beerItem";
import * as Error from "../../common/errors.js";

export class BeersList extends React.Component {
    beerToBeerItem = beer => {
      const name = beer.name;
      const id = beer.id;
      return <BeerItem key={id} name = {name} />;
    };
  
    render() {
      try
      {
        return (
          <ul>
            {this.props.beers.map(this.beerToBeerItem)}
          </ul>
        );
      }
      catch(e)
      {
        return(
          <b>{<Error.DataError/>}</b>
        );  
      }
    }
  }