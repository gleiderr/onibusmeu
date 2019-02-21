import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Horario(props) {
  const partidas = props.partidas.map((partida, index) => {
      return (
        <span className='border rounded m-1' key={index}>
          {partida}
        </span>
      );
    });

  return (
    <div>
      <h6>{props.título}</h6>
      <div className='d-flex flex-wrap'>{partidas}</div>
    </div>
   );
}

function Linha(props) {
  const quadros = props.quadros.map((horário) => {
    return (<Horario key={horário.título} 
                     título={horário.título}
                     partidas={horário.partidas} />);
  });

  return (
    <div className='card card-body my-2'>
      <h5 className='card-title mb-0'>{props.número} - {props.nome}</h5>
      <div className='card-text'>
        <div><strong>Tarifa:</strong> {props.tarifa}</div>
        <div><strong>Município:</strong> {props.município}</div>
        <div><strong>Empresa:</strong> {props.empresa}</div>
        {quadros}
      </div>
    </div>
   );
}

function Linhas(props) {
  const linhas = props.linhas.map((linha) => {
    return (<Linha key={linha.número}
                   número={linha.número}
                   nome={linha.nome}
                   município={linha.município}
                   tarifa={linha.tarifa}
                   empresa={linha.empresa}
                   quadros={linha.quadros} />);
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
    quadros: [
      {
        título: 'Dia Útil',
        partidas: [
          '00:30',
          '01:50',
          '03:10',
          '04:00',
          '04:30',
          '04:40',
          '04:50',
          '05:00',
          '05:10',
          '05:30', 
          '05:45', 
          '06:00', 
          '06:20',
          '06:35', '06:50', '07:35', '07:55',
          '08:15', '08:45', '09:15', '09:45',
          '10:15', '10:45', '11:15', '11:45',
          '12:25', '12:45', '13:10', 
          '13:25',
          '13:45',
          '14:05',
          '14:25',
          '14:45',
          '15:05',
          '15:20',
          '15:35',
          '15:50',
          '16:10',
          '16:20',
          '16:30',
          '16:50',
          '17:00',
          '17:20',
          '17:35',
          '17:50',
          '18:05',
          '18:20',
          '18:35', 
          '18:50',
          '19:10',
          '19:30',
          '19:50',
          '20:10',
          '20:30',
          '20:50', 
          '21:25',
          '22:00',
          '22:35',
          '23:10', 
          '23:45', 
        ],
      },
    ]
  },
];

fetch('./der.json')
  .then(resp => resp.json())
  .then(linhas => {
    ReactDOM.render(<HomePage linhas={linhas}/>, document.getElementById('root'));
    console.log(linhas);
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
  });//*/


