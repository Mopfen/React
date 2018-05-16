import axios from 'axios';

export function authorize(email, password)
{
    return function (dispatch)
    {
        dispatch(loginDataChange(email, password));
        
        axios.post('http://dobrepiwo.azurewebsites.net/api/token', { email: email, password: password })
        .then(res => dispatch(tokenSet(res.data)))
        .catch(error => dispatch(errorCatch(true, error.response.status))) //dev
        .catch(error => dispatch(errorCatch(true)));
    }      
}

export const loadingSet = ( bool ) => ({
    type: 'LOADING_STATUS_CHANGED',
    bool
});

export const errorCatch = ( bool, error = 666 ) => ({
    type: 'ERROR_STATUS_CHANGED',
    bool, error
});

export const loginDataChange = (email, password) => ({
    type: 'LOGIN_DATA_CHANGED',
    email, password
});

export const tokenSet = ( data ) => ({
    type: 'TOKEN_NEEDED',
    data
});

