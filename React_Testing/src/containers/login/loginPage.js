import React from 'react';

export class Login extends React.Component
{
    render()
    {
        return(
            <div className = "text-center bg-warning">
                <h2 className="text-light">Logowanie</h2>
                <p><input id="email" type="text" className="bg-white" placeholder='E-mail'/></p>
                <p><input id="password" type="password" className="bg-white" placeholder="Hasło"/></p>
                <p><button type="submit" onClick={this.Authorize} className="btn btn-primary">Zaloguj</button></p>
            </div>
        );
    }

    Authorize()
    {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        fetch('http://localhost:64547/api/token', { method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(res => res.json())
        .then(json => localStorage.setItem( 'token', json.token ));        
    }
}
