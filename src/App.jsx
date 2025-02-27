import "./app.css";

import db from "./db.json";

import { useReducer, useState } from "react";
import { TbCopyMinusFilled, TbCopyPlusFilled } from "react-icons/tb";

import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Genero from "./componentes/Genero";

import doramasReducer, { ADICIONAR_DORAMA, DELETAR_DORAMA, RESOLVER_FAVORITO } from "./doramasReducer";
import generosReducer, { ADICIONAR_GENERO, MUDAR_COR_GENERO } from "./generosReducer";

function App() {
  const [generos, dispatchGeneros] = useReducer(generosReducer, db.generos);

  const [doramas, dispatchDoramas] = useReducer(doramasReducer, db.doramas);

  const [isShow, setIsShow] = useState(false);

  function cadastrarGenero(novoGenero) {
    dispatchGeneros({
      tipo: ADICIONAR_GENERO,
      novoGenero
    })
  }

  function cadastrarDorama(novoDorama) {
    dispatchDoramas({
      tipo: ADICIONAR_DORAMA,
      novoDorama
    })
  }

  function deletarDorama(id) {
    dispatchDoramas({
      tipo: DELETAR_DORAMA,
      id
    })
  }

  function resolverFavorito(id) {
    dispatchDoramas({
      tipo: RESOLVER_FAVORITO,
      id
    })
  }

  function mudarCorDoGenero(id, novaCor) {
    dispatchGeneros({
      tipo: MUDAR_COR_GENERO,
      id,
      novaCor
    })
    // setGeneros(generos.map(genero => {
    //   if (genero.id === id) {
    //     genero.cor = cor;
    //   }
    //   return genero;
    // }))
  }

  return (
    <>
      <Banner />
      {isShow && (
        <Formulario
          generos={generos.map((genero) => genero.nome)}
          aoCadastrar={cadastrarDorama}
          cadastrarGenero={cadastrarGenero}
        />
      )}
      <section className="generos">
        <div className="cabecalho">
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? (
              <TbCopyMinusFilled size={25} color="#fff" />
            ) : (
              <TbCopyPlusFilled size={25} color="#fff" />
            )}
          </button>
          <h1>Meus Doramas</h1>
        </div>
        {generos.map((genero, indice) => (
          <Genero
            key={indice}
            genero={genero}
            doramas={doramas.filter((dorama) => dorama.genero === genero.nome)}
            aoDeletar={deletarDorama}
            mudarCor={mudarCorDoGenero}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </>
  );
}

export default App;
