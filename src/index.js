import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const linhas = [
  {
    nome: '5800',
    horários: [
      {
        variação: 'Dia Útil',
        partidas: [
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '01:30', local: 'Terminal Morro Alto'},
          { hora: '02:30', local: 'Terminal Morro Alto'},
          { hora: '03:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
        ],
      },
      {
        variação: 'Sábado',
        partidas: [
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '01:30', local: 'Terminal Morro Alto'},
          { hora: '02:30', local: 'Terminal Morro Alto'},
          { hora: '03:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
        ],
      },
      {
        variação: 'Domingos e Feriados',
        partidas: [
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '01:30', local: 'Terminal Morro Alto'},
          { hora: '02:30', local: 'Terminal Morro Alto'},
          { hora: '03:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
          { hora: '00:30', local: 'Terminal Morro Alto'},
        ],
      },
    ]
  },
];

function Horario(props) {
  const partidas = props.partidas.map((partida, index) => {
      return (
        <div key={index}>
          <strong>- {partida.hora} </strong>
          <small>{partida.local}</small>
        </div>
      );
    });

  return (
    <div>
      <h3>{props.variação}</h3>
      {partidas}
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
    <div>
      <h2>{props.nome}</h2>
      {horários}
    </div>
   );
}

function Linhas(props) {
  const linhas = props.linhas.map((linha) => {
    return (<Linha key={linha.nome} 
                   nome={linha.nome} 
                   horários={linha.horários} />);
  })

  return (<div>{linhas}</div>);
}

ReactDOM.render(<Linhas linhas={linhas}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
