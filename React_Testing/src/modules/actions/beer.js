import axios from 'axios';
import * as common from './common';

export function getBeers()
{
    return function (dispatch)
    {
        var config = {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        };
        
        dispatch(common.loadingSet(true));
        axios.get("http://dobrepiwo.azurewebsites.net/api/beer", config)
        .then(res => dispatch(beersLoaded(res.data), dispatch(common.loadingSet(false))))
        .catch(error => dispatch(common.errorCatch(true, error.response.status))) //dev
        .catch(error => dispatch(common.errorCatch(true)))
    }
}

export const beersLoaded = (beers) => ({
    type: 'FETCH_BEERS_SUCCESS',
    beers
});