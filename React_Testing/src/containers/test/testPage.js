import React from 'react';
import './test.css';

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
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Baza piw</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ranking piw</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dodaj piwo</a>
                            </li>
                        </ul>
                        <span className="navbar-text">Zaloguj się</span>
                    </div>
                </nav>
                <section className="text-light">
                    <p>Lorem ipsum dołór sit amęt, veniam feugait vel id, sólęat ąnciłłae no mei? At illum intełlegat pró. In graeci prompta assuevęrit has, ąd opórteat tinciduńt tęmpóribus nec? Ęą modus inimicus quo, eą duó autem łabore, essęnt praeseńt ćum ću? Est saepę veręar ex, cum ęu assum cłita complectitur. Usu vidę tińcidunt fórensibus ut, mutat dóćendi sea at.</p>
                    <p>Id falli tińcidunt qui, an paulo zrił impetuś sęd, in eum małorum intellegąm śćriptoręm? Ridens impedit hąbemus ęu mea, nec solum ómnes mediocrem tę, pri fącer honęstątiś et. Quis perśius łiberavisśe te per? Ómńesque apparęat appellantur nam no. Vix quod łiberavisse cu, no decore mediocrem pętentium seą, amet omnesquę voluptąria eos an! Ałia latine iuvąręt nó quo!</p>
                    <img src="goku.png"/><img src="goku.png"/><img src="goku.png"/><img src="goku.png"/>
                    <p>Vix ęquidem męntitum dęfinitiońem no. Qui ęt adhuc sónet. Errem omneś aliquid viś in, ńo źrił invenire similique sit. Cum choro ulląmcorper theophrąstus ea, mel te noster suavitate. Mentitum temporibus pri cu, ad nec putant eruditi nostrum?</p>
                    <p>Per ei mołlis adversarium, duó ęrror fabęlłas in. An aćcusąmuś scriptorem iuś, augue eruditi faciłisi et nam! Ex nisl fabułąś duo. Eą quo wisi error śigniferumque, possit scripta necessitatibus an veł. Has ne dićąnt ornatus faciłisis, est ńe pertinax vituperata concludaturque.</p>
                    <p>Vęl ea diam corpora iudićabit. Ńo ius nostro concludaturque, hiś ea ęłitr ćausąę ratiońibus? At mei ullum propriae! Nam ąd amęt nibh aliquąm, munęrę accumsąn mędiócritatęm ea ćum! Ius no veritus cotidieque? Vim eu stęt tempor cópiosae!</p>
                    <p>Mel ex inąni scripta aliquandó, ęt usu quaestio erróribus? Has mągńą eirmod utroquę ęa, ea ęum everti vivendum, an dićant nostró apęriri duo. Ea qui dicat simul consul, vim ex vero ubique evertitur. Dólorem incorruptę cotidiequę no pri, per łuduś melius ne, cum ad probo dębitis? Ęi persius tibique moderatius ius, erręm dęnique reprimique ne duo, cum ęlit ęxęrci persequeris eą.</p>
                    <p>Quaęquę inveńire suavitatę ne meą? Ex maluisset intełlegam his, utamur łegendos id has! Pri novum ąńtiópam delićata ań, eum cu falłi aliquip! At ęxpetendą posidónium susćipiantur qui!</p>
                    <p>Vel an similique mediocritątęm, sęmper ancillaę perićulą eum at. Śea ałii commune eu, cu brutę ąliquam sadipsćing seą, in noster debitiś facilis pri? Ex pópuló denique mei, tę nąm ignota animał legimus. Śint veręar nó ius! Cu doming malorum eąm, nuśquam voluptatibuś et pró, ei tamquam delectuś phaedrum nam.</p>
                    <p>At agam movet quodsi hąs. Qui id laborę apęriri scribeńtur? Ęu ęst malorum ceteróś volumus, cum cu ęlitr cońgue fęugiat. Ut duo inveńire vituperata, cu debet putant animał pęr. Ómnium nostrud scribentur et eam, at vix nominati interpretąris!</p>
                    <p>Ius id sólum alterum. Has iudicó lobortis torquatos te. Vitae cónsectetuer signiferumque ei sed, ęą mea nibh definiebąs! An tempor łabitur probatuś usu, ęt mńesarchum necessitątibus his! Meą eą timeam legendos ćońśequuńtur, id nęc igńota rępudiare. Sit saepe scaęvola atómorum ei, vim aeque cóńguę alienum ęx.</p>
                </section>
                <footer className="text-center row">
                    <div className="col-lg-3">
                        <p><img src="UwmLogo.png" width='200px' height='40px'/></p>
                        <p><img src="BillenniumLogo.png" width='200px' height='40px'/></p>
                    </div>
                </footer>
            </div>
        ); 
    }
}
