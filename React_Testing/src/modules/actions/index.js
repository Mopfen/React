import axios from 'axios';

var config = {
    headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
  };

export function fetchBeers()
{
    return function (dispatch)
    {
        /*axios.get("http://localhost:64547/api/user/all", config)
        .then(res => dispatch(beersFetched(res.data), console.log(res), console.log(res.data)))*/  

        fetch("http://localhost:64547/api/user/all", { method: 'GET', confing})
        .then(res => res.json())  
        .then(json => dispatch(beersFetched(json.Users)))
    }
}

export const beersFetched = (beers) => ({
    type: 'FETCH_BEERS_SUCCESS',
    beers,
});

/*export const beersFetched = (beers) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_BEERS_SUCCESS',
            beers
        });  
    };
}; Jaki to ma sens?*/

