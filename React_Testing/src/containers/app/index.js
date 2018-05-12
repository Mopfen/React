import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../common/Header'
import { Home } from '../home/homePage';
import { BeerContainer } from '../beer/beerPage';
import { Login } from '../login/loginPage';

export class App extends React.Component
{
  state = { }
  
  render()
  {
    return(
    <div className = "bg-secondary">
      <Header/>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/beers" render={()=><BeerContainer/>}/>
        <Route path="/login" render={()=><Login/>}/>
      </main>
    </div>);
  }
}
