import React from 'react';
import { connect } from "react-redux";
import { BeersList } from './beersList.js'
import * as Error from "../../common/errors.js";
import { beersFetched } from "../../modules/actions";

export class Beer extends React.Component
{
    state = { isLoading: false, error: false };

    componentDidMount()
    {
        this.setState({isLoading: true});

        fetch("http://localhost:64547/api/user/all", { method: 'GET', headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        .then(res => res.json())
        .then(json => this.props.beersFetched(json.Users), this.setState({isLoading: false}));
    }

    render()
    {
        const beers = this.props.beers;
        const isLoading = this.state.isLoading;
        const error = this.state.error;
        return(
            <div className = "bg-warning">
                <h1 className="text-light">Beer Page by Mopfen</h1>
                <h4><Content beers={beers} isLoading = {isLoading} error = {error}/></h4>
            </div>
        );
    }
}

const Content = ({beers, isLoading, error}) => {
    if(error)
        return(
            <b className="text-white"><Error.DataError/></b>
        );
    if(isLoading)
        return(
            <b className="text-white">Ładowanie...</b>
        );
    return(
        <p className="text-white"> <BeersList beers={beers}/></p>
    );
}

const mapStateToProps = state => {
    return {
      beers: state.beers
    }
  };
const mapDispatchToProps = { beersFetched };

export const BeerContainer = connect(mapStateToProps, mapDispatchToProps)(Beer);
