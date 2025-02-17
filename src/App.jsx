import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './app.css'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Rodape from './componentes/Rodape'
import Genero from './componentes/Genero'

function App() {

  const [generos, setGeneros] = useState([
    {
      id: uuidv4(),
      nome: 'Romance',
      cor: '#ee7188',
    },
    {
      id: uuidv4(),
      nome: 'Comédia romântica',
      cor: '#cd9cb2',
    },
    {
      id: uuidv4(),
      nome: 'Escolar',
      cor: '#ffe180',
    },
    {
      id: uuidv4(),
      nome: 'Policial',
      cor: '#a9c8b2',
    },
    {
      id: uuidv4(),
      nome: 'Médico',
      cor: '#84b6f4',
    },
    {
      id: uuidv4(),
      nome: 'Ficção científica',
      cor: '#b0c2f2',
    },
    {
      id: uuidv4(),
      nome: 'Suspense',
      cor: '#ffda9e',
    },
    {
      id: uuidv4(),
      nome: 'Terror',
      cor: '#fcb7af',
    },
    {
      id: uuidv4(),
      nome: 'Fantasia',
      cor: '#8ae287',
    }
  ])

  const [doramas, setDoramas] = useState([
    {
      id: uuidv4(),
      titulo: 'Love Scout',
      episodios: 11,
      link: 'https://www.viki.com/tv/40833c-love-scout?locale=pt',
      poster: 'https://www.oliberal.com/image/contentid/policy:1.900623:1734980842/dorama-meu-secretario-preferido.jpg?f=1x1&$p$f=b3b68a4',
      genero: generos[0].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'Love Your Enemy',
      episodios: 12,
      link: 'https://www.viki.com/tv/40699c-love-your-enemy?locale=pt',
      poster: 'https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/11/27/5491a332-bdf1-472f-bb62-12a747502089_6e550ef0.jpg?itok=aGb7dzVl&v=1732676019',
      genero: generos[1].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'True Beauty',
      episodios: 16,
      link: 'https://www.netflix.com/br/title/81410834',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQPki0n0Xghjd5mq5WrS382WM_4s48BDaGg&s',
      genero: generos[2].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'Possessed',
      episodios: 16,
      link: 'https://www.netflix.com/br/title/81087764',
      poster: 'https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbm8aB_k-MA_h87to_dSSBSl9x5_QRBTNwkz4Pk0Zh5kn4ZfBjlBJ-VYt3pOz9zhWdizmlqngSVZuJLiyvLY2K6xG0ThVksUYXQ7.jpg?r=107',
      genero: generos[3].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'Dr. Romantic 1',
      episodios: 21,
      link: 'https://www.viki.com/tv/32754c-dr-romantic-series',
      poster: 'https://i.pinimg.com/originals/fd/06/e9/fd06e93b4c734e25a6949f5c46ce3133.jpg',
      genero: generos[4].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'Gyeongseong Creature 1',
      episodios: 10,
      link: 'https://www.netflix.com/br/title/81618079',
      poster: 'https://s2-techtudo.glbimg.com/AEqajCCg0db4j4o8MF2KN6leJpE=/0x0:1024x576/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/6/z/FwDh8lQTy3BsRcnxmW4A/aaaabrygs6o4oxmebgw78chzmeifscgfpfkyjoslun5ce9sp-brxdb1hdxrtl1agvf7hcysnrrz0-k04njonio37eebngwkfy0p4zawa.jpg',
      genero: generos[5].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'The Glory',
      episodios: 16,
      link: 'https://www.netflix.com/br/title/81519223',
      poster: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/03/21/2008677594-the-glory.jpg',
      genero: generos[6].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'All of Us Are Dead',
      episodios: 12,
      link: 'https://www.netflix.com/br/title/81237994',
      poster: 'https://ambrosia.com.br/wp-content/uploads/2022/02/a6KSSuzIzyR8WnTC0sKIG6WKtTx.jpg',
      genero: generos[7].nome,
      favorito: false
    },
    {
      id: uuidv4(),
      titulo: 'Tale of the Nine Tailed',
      episodios: 16,
      link: 'https://www.primevideo.com/-/pt/detail/O-Conto-de-Nove-Caudas/0P4VCM2FSO79YOUF3UEJZBO883',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0ivW1YsEbfWqY5Qo-ed_81ftDbS8KXkPoQ&s',
      genero: generos[8].nome,
      favorito: false
    }
  ])

  function deletarDorama(id) {
    setDoramas(doramas.filter(dorama => dorama.id !== id))
  }

  function resolverFavorito(id) {
    setDoramas(doramas.map(dorama => {
      if(dorama.id === id) {
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
    setGeneros([...generos, {...novoGenero, id: uuidv4()}])
  }

  return (
    <>
      <Banner />
      <Formulario
        generos={generos.map(genero => genero.nome)}
        aoCadastrar={dorama => setDoramas([...doramas, dorama])}
        cadastrarGenero={cadastrarGenero}
      />
      <section className='generos'>
        <h1>Meus Doramas</h1>
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