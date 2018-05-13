import React from 'react';
import { Test } from './testPage.js';

export class App extends React.Component
{
  state = { }
  
  render()
  {
    return(
    <div className = "bg-secondary">
        <Test/>
    </div>);
  }
}