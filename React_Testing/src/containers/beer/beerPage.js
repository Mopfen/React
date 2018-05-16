import React from 'react';
import { connect } from "react-redux";
import { BeersList } from './beersList.js'
import * as Error from "../../common/errors.js";
import { getBeers } from "../../modules/actions/beer.js";
import * as BeerSelectors from "../../modules/selectors/beer.js"
import * as CommonSelectors from "../../modules/selectors/common.js"
import { store } from '../../store';

export class Beer extends React.Component
{
    componentDidMount()
    {
        var bool = false;
        store.dispatch({ type: 'ERROR_STATUS_CHANGED', bool });
        this.props.getBeers();
    }

    render()
    {
        const beers = this.props.beers;
        const isLoading = this.props.isLoading;
        const isError = this.props.isError;
        const errorCode = this.props.errorCode;
        return(
            <div className = "bg-warning" style={ {'backgroundImage': 'url("beer.jpg")', 'backgroundRepeat': 'repeat-y', 'backgroundSize': '100% auto'} }>
                <h1 className="text-light">Beer Page by Mopfen</h1>
                <h4><Content beers={beers} isLoading = {isLoading} isError = {isError} errorCode = {errorCode}/></h4>
            </div>
        );
    }
}

const Content = ({beers, isLoading, isError, errorCode}) => {
    if(isError)
        return(
            <b className="text-white"><Error.DataError errorCode = {errorCode}/></b>
        );
    if(isLoading)
        return(
            <b className="text-white">Ładowanie...</b>
        );
    return(
        <span className="text-white"> <BeersList beers={beers}/></span>
    );
}

const mapStateToProps = state => {
    return {
      beers: BeerSelectors.beers(state),
      isLoading: CommonSelectors.isLoading(state),
      isError: CommonSelectors.isError(state),
      errorCode: CommonSelectors.errorCode(state)
    }
  };
const mapDispatchToProps = { getBeers };

export const BeerContainer = connect(mapStateToProps, mapDispatchToProps)(Beer);
