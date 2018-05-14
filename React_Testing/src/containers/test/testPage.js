import React from 'react';
import './test.css';
import './test2.css';

export class Test extends React.Component
{
    render()
    {
        return(
            <div id="background" style={ { 'background-image': 'url("beer.jpg")' } }>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#">
                        <img src="https://inkwizycja.azurewebsites.net/mpmm/mpmm_logo.png" height="70"/>
                        <b style={{'font-size': '24px'}}>Dobrepiwo.pl</b>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Baza piw</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ranking piw</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Dodaj piwo</a>
                            </li>
                        </ul>
                        <span className="navbar-text">Zaloguj się</span>
                    </div>
                </nav>
                <section className="text-light">
                    <div className="row">
                        <div id="title" className="col-lg-8">
                            <h3>Formularz dodawania nowego piwa:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 form">
                            <label>Nazwa:</label>
                            <p><input type="text" className="bg-light text-dark longer form-control" placeholder="Nazwa piwa"/></p>
                            <label>Zawartość procentowa alkoholu:</label>
                            <p><input type="text" className="bg-light text-dark longer form-control" placeholder="0.0%"/></p>
                            <label>Producent:</label>
                            <p className="text-right"><input id="select" list="browsers" className="bg-light text-dark form-control" placeholder="Nazwa producenta"/><datalist id="browsers" className="bg-light text-dark"><option>xx</option></datalist><span className="text-primary">Dodaj nowego producenta</span></p>
                            <label>Zdjęcie:</label>
                            <p><input type="file" className=".form-control .form-control-file"/></p>
                        </div>
                        <div className="col-lg-4 form">
                            <div className="row" style={{'padding': '0'}}>
                                <div className="col-lg-6"> <label>Opis:</label> </div>
                                <div className="col-lg-6 text-right"> <label>Ilośc znaków: (x/256)</label> </div>
                            </div>
                            <p><textarea className="bg-light text-dark form-control" placeholder="Opis piwa" /></p>
                            <div id="submit" className="text-right"> <button className="btn btn-success">Zatwierdź</button> </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <img src="mug.png" width="80%"/>
                        </div>
                    </div>
                </section>
                <footer className="row">
                    <div className="col-lg-3 text-center">
                        <p><img src="UwmLogo.png" width='200px' height='40px'/></p>
                        <p><img src="BillenniumLogo.png" width='200px' height='40px'/></p>
                    </div>
                    <div className="col-lg-3 text-left">
                        <p><h4>Kontakt:</h4></p>
                        <p>examle@mail.com</p>
                    </div>
                    <div className="col-lg-3 text-left">
                        <p>©Mopfen, Olsztyn 2018</p>
                    </div> 
                </footer>
            </div>
        ); 
    }
}
