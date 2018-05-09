import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../home/homePage';
import { Beer } from '../beer/beerPage';
import Header from '../../Common/Header'
export class App extends React.Component
{
  state = {};

  render()
  {
    return(
    <div className = "bg-secondary">
      <Header/>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beer} />
      </main>
    </div>);
  }
}
