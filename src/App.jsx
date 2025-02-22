import './app.css'

import db from './db.json';

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TbCopyMinusFilled, TbCopyPlusFilled } from "react-icons/tb";

import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Rodape from './componentes/Rodape'
import Genero from './componentes/Genero'

function App() {

  const [generos, setGeneros] = useState(db.generos);

  const [doramas, setDoramas] = useState(db.doramas);

  const [isShow, setIsShow] = useState(false);

  function deletarDorama(id) {
    setDoramas(doramas.filter(dorama => dorama.id !== id))
  }

  function resolverFavorito(id) {
    setDoramas(doramas.map(dorama => {
      if (dorama.id === id) {
        dorama.favorito = !dorama.favorito;
      }
      return dorama;
    }));
  }

  function mudarCorDoGenero(cor, id) {
    setGeneros(generos.map(genero => {
      if (genero.id === id) {
        genero.cor = cor;
      }
      return genero;
    }))
  }

  function cadastrarGenero(novoGenero) {
    setGeneros([...generos, { ...novoGenero, id: uuidv4() }])
  }

  return (
    <>
      <Banner />
      {isShow && (
        <Formulario
          generos={generos.map(genero => genero.nome)}
          aoCadastrar={dorama => setDoramas([...doramas, dorama])}
          cadastrarGenero={cadastrarGenero}
        />
      )}
      <section className='generos'>
        <div className="cabecalho">
          <button onClick={() => setIsShow(!isShow)}>
            {isShow
              ? <TbCopyMinusFilled size={25} color='#fff' />
              : <TbCopyPlusFilled size={25} color='#fff' />
            }
          </button>
          <h1>Meus Doramas</h1>
        </div>
        {generos.map((genero, indice) =>
          <Genero
            key={indice}
            genero={genero}
            doramas={doramas.filter(dorama => dorama.genero === genero.nome)}
            aoDeletar={deletarDorama}
            mudarCor={mudarCorDoGenero}
            aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      <Rodape />
    </>
  )

}

export default App