import React from 'react';
import { connect } from "react-redux";
import { BeersList } from './beersList.js'
import * as Error from "../../common/errors.js";
import { fetchBeers} from "../../modules/actions";
import * as BeerSelectors from "../../modules/selectors/beers.js"

export class Beer extends React.Component
{
    componentDidMount()
    {
        this.props.fetchBeers();
    }

    render()
    {
        const beers = this.props.beers;
        const isLoading = false;
        const error = false;
        return(
            <div className = "bg-warning" style={ {'backgroundImage': 'url("beer.jpg")', 'backgroundRepeat': 'repeat-y', 'backgroundSize': '100% auto'} }>
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
        <span className="text-white"> <BeersList beers={beers}/></span>
    );
}

const mapStateToProps = state => {
    return {
      beers: BeerSelectors.beers(state)
    }
  };
const mapDispatchToProps = { fetchBeers };

export const BeerContainer = connect(mapStateToProps, mapDispatchToProps)(Beer);
