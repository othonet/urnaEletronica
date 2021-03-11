import React, { useEffect, useState } from 'react';
import Tecla from './assets/sounds/tecla.mp3';
import Confirma from './assets/sounds/confirma.mp3';
import './app.css';

export default function App() {

  //Teclado
  const [botao1, setBotao1] = useState('1');
  const [botao2, setBotao2] = useState('2');
  const [botao3, setBotao3] = useState('3');
  const [botao4, setBotao4] = useState('4');
  const [botao5, setBotao5] = useState('5');
  const [botao6, setBotao6] = useState('6');
  const [botao7, setBotao7] = useState('7');
  const [botao8, setBotao8] = useState('8');
  const [botao9, setBotao9] = useState('9');
  const [botao0, setBotao0] = useState('0');


  //Botões de ação
  const [botaoBranco, setBotaoBranco] = useState('Branco');
  const [botaoCorrige, setBotaoCorrige] = useState('Corrige');
  const [botaoConfirma, setBotaoConfirma] = useState('Confirma');

  //Campo dos números dos candidatos
  const [num1Cand, setNum1Cand] = useState('');
  const [num2Cand, setNum2Cand] = useState('');

  //Contagem dos votos
  const [votosBolsonaro, setBolsonaro] = useState(0);
  const [votosLula, setLula] = useState(0);
  const [votosMoro, setMoro] = useState(0);
  const [votosDoria, setDoria] = useState(0);
  const [votosHulk, setHulk] = useState(0);

  //Ações boolean
  const [isSong, setIsSong] = useState(true);
  const [isCorrige, setIsCorrige] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isBranco, setIsBranco] = useState(false);

  const voto = num1Cand + num2Cand;

  const candidatos = [
    {
      id: 1,
      nome: 'Jair Bolsonaro',
      numero: '17',
      partido: 'Aliança pelo Brasil',
      img: 'https://exame.com/wp-content/uploads/2018/09/bolsoemotivo1.jpg'
    },

    {
      id: 2,
      nome: 'João Dória',
      numero: '24',
      partido: 'LGBT',
      img: 'https://extra.globo.com/incoming/24560772-389-cd8/w488h275-PROP/doria.jpg'
    },

    {
      id: 3,
      nome: 'Sérgio Moro',
      numero: '11',
      partido: '...',
      img: 'https://www.ictq.com.br/images/3-licoes-do-juiz-sergio-moro-para-farmaceuticos.jpg'
    },

    {
      id: 4,
      nome: 'Lula',
      numero: '13',
      partido: 'Perda Total - PT',
      img: 'https://static.poder360.com.br/2018/04/Lula-SergioLima-9out2017_-868x644.jpeg'
    },
  ]


  function insereNum(num) {

    if (num1Cand == '') {
      setNum1Cand(num);
    } else if (num2Cand == '') {
      setNum2Cand(num);
    }

    let audio = new Audio(Tecla);
    audio.play();
  }

  function corrigeNum() {
    if (isConfirm === true) {
      return null;
    }
    setNum1Cand('');
    setNum2Cand('');
  }

  function confirmaNum(voto) {

    if (voto != '') {
      if (isSong == true) {
        let audio = new Audio(Confirma);
        audio.play();
      }

      let tela;

      tela = document.querySelector('.tela');
      tela.innerHTML = '<h2>Voto confirmado! ✅</h2>'
      setIsSong(false);
      setIsConfirm(true);
    } else {
      return null;
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Urna Eletrônica Virtual</h1>
      </header>

      <div className="urna">
        <div className="tela" id="tela">

          <div className="numCand">
            <input type="text" maxLength="1" value={num1Cand} readOnly />
            <input type="text" maxLength="1" value={num2Cand} readOnly />
          </div>

          {candidatos.map((item) => {
            return (
              voto === item.numero ? (

                <div key={item.id}>
                  <div className="nomeCand">
                    <h2> {item.nome} </h2>
                    <p> Partido: <strong>{item.partido}</strong> </p>
                  </div>

                  <div className="fotoCandidato">
                    <img src={item.img} alt={item.nome} />
                  </div>

                </div>

              )
                :

                null

            )

          })}

        </div>

        <div className="teclado">

          <div className="primeira">
            <button onClick={() => insereNum(botao1)} >1</button>
            <button onClick={() => insereNum(botao2)}>2</button>
            <button onClick={() => insereNum(botao3)}>3</button>
          </div>

          <div className="segunda">
            <button onClick={() => insereNum(botao4)}>4</button>
            <button onClick={() => insereNum(botao5)}>5</button>
            <button onClick={() => insereNum(botao6)}>6</button>
          </div>

          <div className="terceira">
            <button onClick={() => insereNum(botao7)}>7</button>
            <button onClick={() => insereNum(botao8)}>8</button>
            <button onClick={() => insereNum(botao9)}>9</button>
          </div>

          <div className="quarta">
            <button onClick={() => insereNum(botao0)}>0</button>
          </div>

          <div className="quinta">
            <button value="branco" style={{ background: 'white', color: '#333' }}>Branco</button>
            <button value="corrige" onClick={() => corrigeNum()} style={{ background: 'orange', color: '#333' }} >Corrige</button>
            <button value="confirma" onClick={() => confirmaNum(voto)} style={{ background: 'lime', color: '#333' }}>Confirma</button>
          </div>
        </div>

      </div>


      <footer>Othon Felipe - <strong>Developer Web</strong></footer>

    </div>
  );
}