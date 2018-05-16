import React from 'react';
import { connect } from "react-redux";
import { authorize } from "../../modules/actions/common.js";
import * as checkUser from "../../modules/other/userIdentifitacion.js";
import { store, history } from '../../store';

export class Login extends React.Component
{
    state = { email: '', password: ''}

    componentWillMount()
    {
        //if(checkUser.checkIfLogged() === 200)
           // history.push("/");
    }

    componentDidMount()
    {
        var bool = false;
        store.dispatch({ type: 'ERROR_STATUS_CHANGED', bool });
    }

    render()
    {
        return(
            <div className = "text-center bg-warning">
                <form onSubmit={this.send }>
                    <h2 className="text-light">Logowanie</h2>
                    <p><input id="email" type="text" className="bg-white" placeholder='E-mail' onChange={this.formChanged}/></p>
                    <p><input id="password" type="password" className="bg-white" placeholder="Hasło" onChange={this.formChanged}/></p>
                    <p><input type="submit" className="btn btn-primary" defaultValue="Zaloguj"/></p>
                </form>
            </div>
        );
    }

    send(event)
    {
        this.props.authorize(this.state.email, this.state.password);
        event.preventDefault();
    }

    formChanged = (event) => {
        switch(event.target.id)
        {
            case 'email': this.setState({ email: event.target.value }); break;
            case 'password': this.setState({ password: event.target.value }); break;
            default: break;
        }
    }
}

const mapStateToProps = state => {
    return {
    }
  };
const mapDispatchToProps = { authorize };

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
