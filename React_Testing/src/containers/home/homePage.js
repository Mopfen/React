import React from 'react';

export class Home extends React.Component
{
    state = { value: 'blue', class: 'btn-primary'};

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        switch(event.target.value)
        {
            case 'red': this.setState({class: 'btn-danger'}); break;
            case 'blue': this.setState({class: 'btn-primary'}); break;
            case 'green': this.setState({class: 'btn-success'}); break;
            default: break;
        }
      }

    render()
    {
        return(
            <div className = "text-center bg-info">
                <h1 className="text-light">Home Page by Mopfen</h1>
                <select className={this.state.class} value={this.state.value} onChange={this.handleChange}>
                    <option value="red">Czerwony</option>
                    <option value="blue">Niebieski</option>
                    <option value="green">Zielony</option>
                </select>
            </div>
        );
    }
}
