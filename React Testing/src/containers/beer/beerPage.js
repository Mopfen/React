import React from 'react';
import { BeersList } from './beersList.js'

export class Beer extends React.Component
{
    state = { beers: [] };

    componentDidMount() {
        //fetch("https://randomuser.me/api/?results=10", { method: 'GET'})
        fetch("http://dobrepiwo.azurewebsites.net/api/beer/?format=json", { method: 'GET'})
          .then(res => res.json())
          .then(json => this.setState({ beers: json.results }));
      }

    render()
    {
        const beers = this.state.beers;
        return(
            <div className = "bg-warning">
                <h1 className="text-light">Beer Page by Mopfen</h1>
                {beers ? <BeersList beers={beers} /> : 'Ładowanie…'}
            </div>
        );
    }
}
