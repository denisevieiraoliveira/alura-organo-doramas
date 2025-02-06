import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Genero from './componentes/Genero'

function App() {

  const generos = [
    {
      nome: 'Romance',
      corPrimaria: '#ee7188',
      corSecundaria: '#fff5ff'
    },
    {
      nome: 'Comédia romântica',
      corPrimaria: '#cd9cb2',
      corSecundaria: '#fff0f6'
    },
    {
      nome: 'Escolar',
      corPrimaria: '#ffe180',
      corSecundaria: '#fffee1'
    },
    {
      nome: 'Policial',
      corPrimaria: '#a9c8b2',
      corSecundaria: '#e9fced'
    },
    {
      nome: 'Médico',
      corPrimaria: '#84b6f4',
      corSecundaria: '#dceafc'
    },
    {
      nome: 'Ficção científica',
      corPrimaria: '#b0c2f2',
      corSecundaria: '#e9edfb'
    },
    {
      nome: 'Suspense',
      corPrimaria: '#ffda9e',
      corSecundaria: '#fff4e3'
    },
    {
      nome: 'Terror',
      corPrimaria: '#fcb7af',
      corSecundaria: '#ffeae8'
    },
    {
      nome: 'Fantasia',
      corPrimaria: '#8ae287',
      corSecundaria: '#f9ffee'
    }
  ]

  const [doramas, setDoramas] = useState([])

  const aoNovoDoramaAdicionado = (dorama) => {
    debugger
    setDoramas([...doramas, dorama])
  }

  return (
    <>
      <Banner />
      <Formulario 
        generos={generos.map(genero => genero.nome)} 
        aoDoramaCadastrado={dorama => aoNovoDoramaAdicionado(dorama)} 
      />

      {generos.map(genero => <Genero
        key={genero.nome}
        nome={genero.nome}
        corPrimaria={genero.corPrimaria}
        corSecundaria={genero.corSecundaria} 
        doramas={doramas.filter(dorama => dorama.genero === genero.nome)}
      />)}
    </>
  )
}

export default App