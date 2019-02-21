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
    let value = e.target.value.toLowerCase();

    clearTimeout(this.timeoutID);

    this.timeoutID = setTimeout(() => {
      let linhas;
      if (value) {
        linhas = this.props.linhas.filter(linha => {
          let nome = linha.número + ' ' + linha.nome.toLowerCase();
          
          return nome.includes(value);
        });
      } else {
        linhas = this.props.linhas;
      }

      this.setState({linhas});
    }, 300);
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
            <div className='col-6 col-sm-auto p-0'>
              <input className='form-control data-hj-whitelist' 
                     type='search' 
                     placeholder='Sua Linha 🔎'
                     onChange={this.handleChange}
                     />
            </div>
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

fetch('./der.json')
  .then(resp => resp.json())
  .then(linhas => {
    ReactDOM.render(<HomePage linhas={linhas}/>, document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
  });//*/


