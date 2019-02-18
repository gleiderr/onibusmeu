import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Horario(props) {
  const partidas = props.partidas.map((partida, index) => {
      return (
        <span className='border rounded m-1' key={index}>
          {partida.hora} 
          {/*<small>
            {partida.inicio ? ' (Partida: ' + partida.inicio + ')': ''}
            {partida.termino ? ' (Recolhimento: ' + partida.termino + ')': ''}
          </small>*/}
        </span>
      );
    });

  return (
    <div>
      <h6>{props.variação}</h6>
      <div className='d-flex flex-wrap'>{partidas}</div>
    </div>
   );
}

function Linha(props) {
  const horários = props.horários.map((horário) => {
    return (<Horario key={horário.variação} 
                     variação={horário.variação}
                     partidas={horário.partidas} />);
  });

  return (
    <div className='card card-body my-2'>
      <h5 className='card-title mb-0'>{props.nome}</h5>
      <div className='card-text'>
        {/*<div><strong>Partida padrão:</strong> {props.partidaPadrão}</div>*/}
        {horários}
      </div>
    </div>
   );
}

function Linhas(props) {
  const linhas = props.linhas.map((linha) => {
    return (<Linha key={linha.nome} 
                   nome={linha.nome}
                   partidaPadrão={linha.partidaPadrão}
                   horários={linha.horários} />);
  })

  return (<div>{linhas}</div>);
}

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { linhas: props.linhas, };
  }

  handleChange(e) {
    this.setState({
      linhas: this.props.linhas.filter(linha => {
        let nome = linha.nome.toLowerCase();
        let value = e.target.value.toLowerCase();
        
        return nome.includes(value);
      }),
    });
  }

  render() {
    return (
      <div className='h-100'>
        <header>
          <nav className='navbar navbar-dark bg-primary'>
            <div className='navbar-brand'>
                <span role='img' aria-label='Ô'>🚍</span>
                nibus Meu
            </div>
            <form className='form-inline col-6 col-sm-auto p-0'>
              <input className='form-control data-hj-whitelist' 
                     type='search' 
                     placeholder='Sua linha 🔎'
                     onChange={this.handleChange}
                     />
            </form>
          </nav>
        </header>
        <main className='container my-2'>
          <Linhas linhas={this.state.linhas} />
        </main>
        <footer className='bg-primary' >
          <div className='container text-light text-center'>
          {'Desenvolvido por '}
          <a className='text-light' 
             href='https://gleiderr.github.io' 
             rel='noopener noreferrer' 
             target='_blank' 
             style={{'textDecoration': 'underline'}}>
            Gleider Costa
          </a>
          </div>
        </footer>
      </div>
    );
  }
}

const linhas = [
  {
    nome: '5800 - Caieiras',
    partidaPadrão: 'Terminal Morro Alto',
    horários: [
      {
        variação: 'Dia Útil',
        partidas: [
          { hora: '00:30'},
          { hora: '01:50'},
          { hora: '03:10'},
          { hora: '04:00', inicio:'Rua Paulo Ferreira da Costa'},
          { hora: '04:30'},
          { hora: '04:40'},
          { hora: '04:50', inicio:'Rua Paulo Ferreira da Costa'},
          { hora: '05:00', inicio:'Rua Paulo Ferreira da Costa'},
          { hora: '05:10', inicio:'Rua Paulo Ferreira da Costa'},
          { hora: '05:30'}, { hora: '05:45'}, { hora: '06:00'}, { hora: '06:20'},
          { hora: '06:35'}, { hora: '06:50'}, { hora: '07:35'}, { hora: '07:55'},
          { hora: '08:15'}, { hora: '08:45'}, { hora: '09:15'}, { hora: '09:45'},
          { hora: '10:15'}, { hora: '10:45'}, { hora: '11:15'}, { hora: '11:45'},
          { hora: '12:25'}, { hora: '12:45'}, { hora: '13:10'}, 
          { hora: '13:25'},
          { hora: '13:45'},
          { hora: '14:05'},
          { hora: '14:25'},
          { hora: '14:45'},
          { hora: '15:05'},
          { hora: '15:20'},
          { hora: '15:35'},
          { hora: '15:50'},
          { hora: '16:10'},
          { hora: '16:20'},
          { hora: '16:30'},
          { hora: '16:50'},
          { hora: '17:00'},
          { hora: '17:20'},
          { hora: '17:35'},
          { hora: '17:50'},
          { hora: '18:05'},
          { hora: '18:20'},
          { hora: '18:35', termino:'Rua Paulo Ferreira da Costa'},
          { hora: '18:50'},
          { hora: '19:10'},
          { hora: '19:30'},
          { hora: '19:50'},
          { hora: '20:10'},
          { hora: '20:30'},
          { hora: '20:50', termino:'Rua Paulo Ferreira da Costa'},
          { hora: '21:25'},
          { hora: '22:00'},
          { hora: '22:35'},
          { hora: '23:10', termino:'Rua Paulo Ferreira da Costa'},
          { hora: '23:45', termino:'Rua Paulo Ferreira da Costa'},
        ],
      },
      {
        variação: 'Sábado',
        partidas: [
          { hora: '00:30'},
          { hora: '01:50'},
          { hora: '03:10'},
          { hora: '05:05'},
          { hora: '05:35'},
          { hora: '06:20'},
          { hora: '06:40'},
          { hora: '07:05'},
          { hora: '07:35'},
          { hora: '08:25'},
          { hora: '08:45'},
          { hora: '09:05'},
          { hora: '09:35'},
          { hora: '10:05'},
          { hora: '10:35'},
          { hora: '11:05'},
          { hora: '11:55'},
          { hora: '12:35'},
          { hora: '13:15'},
          { hora: '13:55'},
          { hora: '14:35'},
          { hora: '15:15'},
          { hora: '15:55'},
          { hora: '16:35'},
          { hora: '17:15'},
          { hora: '17:55'},
          { hora: '18:20'},
          { hora: '18:45'},
          { hora: '19:10', termino:'Rua Paulo Ferreira da Costa'},
          { hora: '19:35'},
          { hora: '20:05'},
          { hora: '20:35'},
          { hora: '21:25'},
          { hora: '22:25'},
          { hora: '23:10', termino:'Rua Paulo Ferreira da Costa'},
          { hora: '23:45', termino:'Rua Paulo Ferreira da Costa'},
        ],
      },
      {
        variação: 'Domingos e Feriados',
        partidas: [
          { hora: '00:30'},
          { hora: '01:50'},
          { hora: '03:10'},
          { hora: '04:30'},
          { hora: '05:00'},
          { hora: '05:30'},
          { hora: '06:00'},
          { hora: '06:30'},
          { hora: '07:00'},
          { hora: '07:45'},
          { hora: '08:45'},
          { hora: '09:45'},
          { hora: '10:55'},
          { hora: '11:55'},
          { hora: '12:55'},
          { hora: '13:55'},
          { hora: '14:55'},
          { hora: '15:55'},
          { hora: '16:55'},
          { hora: '17:55', termino:'Rua Paulo Ferreira da Costa'},
          { hora: '18:55'},
          { hora: '19:55'},
          { hora: '20:55'},
          { hora: '22:15'},
          { hora: '23:25', termino:'Rua Paulo Ferreira da Costa'},
        ],
      },
    ]
  },
  {
    nome: '5715 - Gávea II',
    partidaPadrão: 'Terminal Morro Alto',
    horários: [
      {
        variação: 'Dia Útil',
        partidas: [
          { hora: '04:12'},
          { hora: '04:24'},
          { hora: '04:36'},
          { hora: '04:48'},
          { hora: '05:00'},
          { hora: '05:12'},
          { hora: '05:24'},
          { hora: '05:25'},
          { hora: '05:36'},
          { hora: '05:48'},
          { hora: '06:00'},
          { hora: '06:12'},
          { hora: '06:24'},
          { hora: '06:36'},
          { hora: '06:48'},
          { hora: '07:00'},
          { hora: '07:12'},
          { hora: '07:24'},
          { hora: '07:36'},
          { hora: '07:48'},
          { hora: '08:00'},
          { hora: '08:20'},
          { hora: '08:40'},
          { hora: '09:00'},
          { hora: '09:20'},
          { hora: '09:40'},
          { hora: '10:00'},
          { hora: '10:20'},
          { hora: '10:40'},
          { hora: '11:00'},
          { hora: '11:20'},
          { hora: '11:40'},
          { hora: '12:00'},
          { hora: '12:20'},
          { hora: '12:40'},
          { hora: '13:00'},
          { hora: '13:20'},
          { hora: '13:40'},
          { hora: '14:00'},
          { hora: '14:20'},
          { hora: '14:40'},
          { hora: '15:00'},
          { hora: '15:20'},
          { hora: '15:40'},
          { hora: '16:00'},
          { hora: '16:12'},
          { hora: '16:24'},
          { hora: '16:36'},
          { hora: '16:48'},
          { hora: '17:00'},
          { hora: '17:12'},
          { hora: '17:24'},
          { hora: '17:36'},
          { hora: '17:48'},
          { hora: '18:00'},
          { hora: '18:12'},
          { hora: '18:24'},
          { hora: '18:36'},
          { hora: '18:48'},
          { hora: '19:00'},
          { hora: '19:12'},
          { hora: '19:24'},
          { hora: '19:36'},
          { hora: '19:48'},
          { hora: '20:00'},
          { hora: '20:15'},
          { hora: '20:30'},
          { hora: '20:45'},
          { hora: '21:00'},
          { hora: '21:15'},
          { hora: '21:30'},
          { hora: '21:45'},
          { hora: '22:00'},
          { hora: '22:20'},
          { hora: '22:40'},
          { hora: '23:00'},
          { hora: '23:20'},
          { hora: '23:40'},
        ],
      },
      {
        variação: 'Sábado',
        partidas: [
          { hora: '04:20'},
          { hora: '04:40'},
          { hora: '05:00'},
          { hora: '05:20'},
          { hora: '05:40'},
          { hora: '06:00'},
          { hora: '06:20'},
          { hora: '06:40'},
          { hora: '07:00'},
          { hora: '07:20'},
          { hora: '07:40'},
          { hora: '08:05'},
          { hora: '08:30'},
          { hora: '08:55'},
          { hora: '09:20'},
          { hora: '09:45'},
          { hora: '10:10'},
          { hora: '10:35'},
          { hora: '11:00'},
          { hora: '11:25'},
          { hora: '11:50'},
          { hora: '12:15'},
          { hora: '12:40'},
          { hora: '13:05'},
          { hora: '13:30'},
          { hora: '13:55'},
          { hora: '14:20'},
          { hora: '14:45'},
          { hora: '15:05'},
          { hora: '15:25'},
          { hora: '15:45'},
          { hora: '16:05'},
          { hora: '16:25'},
          { hora: '16:45'},
          { hora: '17:15'},
          { hora: '17:40'},
          { hora: '18:05'},
          { hora: '18:30'},
          { hora: '18:55'},
          { hora: '19:20'},
          { hora: '19:45'},
          { hora: '20:10'},
          { hora: '20:35'},
          { hora: '21:05'},
          { hora: '21:30'},
          { hora: '21:55'},
          { hora: '22:20'},
          { hora: '22:45'},
          { hora: '23:10'},
          { hora: '23:35'},
          { hora: '23:59'},
        ],
      },
      {
        variação: 'Domingos e Feriados',
        partidas: [
          { hora: '04:40'},
          { hora: '05:00'},
          { hora: '05:20'},
          { hora: '05:40'},
          { hora: '06:00'},
          { hora: '06:20'},
          { hora: '06:40'},
          { hora: '07:00'},
          { hora: '07:20'},
          { hora: '07:40'},
          { hora: '08:00'},
          { hora: '08:25'},
          { hora: '08:50'},
          { hora: '09:15'},
          { hora: '09:40'},
          { hora: '10:05'},
          { hora: '10:30'},
          { hora: '10:55'},
          { hora: '11:20'},
          { hora: '11:45'},
          { hora: '12:10'},
          { hora: '12:35'},
          { hora: '13:00'},
          { hora: '13:30'},
          { hora: '14:00'},
          { hora: '14:30'},
          { hora: '15:00'},
          { hora: '15:30'},
          { hora: '16:00'},
          { hora: '16:30'},
          { hora: '17:00'},
          { hora: '17:30'},
          { hora: '18:00'},
          { hora: '18:30'},
          { hora: '19:00'},
          { hora: '19:30'},
          { hora: '20:00'},
          { hora: '20:30'},
          { hora: '21:20'},
          { hora: '22:00'},
          { hora: '22:40'},
          { hora: '23:40'},
        ],
      },
    ]
  },
];

ReactDOM.render(<HomePage linhas={linhas}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
