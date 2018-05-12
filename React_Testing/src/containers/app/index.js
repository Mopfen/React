import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../../common/Header'
import { Home } from '../home/homePage';
import { Beer } from '../beer/beerPage';
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
        <Route path="/beers" render={()=><Beer token={this.state.token}/>}/>
        <Route path="/login" render={()=><Login/>}/>
      </main>
    </div>);
  }
}
