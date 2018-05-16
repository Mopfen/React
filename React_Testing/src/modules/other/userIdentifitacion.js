import axios from 'axios';

export function checkIfLogged()
{
    var response = 666;
    var config = {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    };

    axios.get("http://dobrepiwo.azurewebsites.net/api//comment/admin", config)
    .then(res => response = res.response.status)
    .catch(error => response = error.response.status)
    .catch(error => response = 666);

    return response;
}