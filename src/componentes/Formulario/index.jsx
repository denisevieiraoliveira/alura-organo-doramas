import './Formulario.css'
import CampoTexto from '../../componentes/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [titulo, setTitulo] = useState('')
    const [episodios, setEpisodios] = useState('')
    const [link, setLink] = useState('')
    const [poster, setPoster] = useState('')
    const [genero, setGenero] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoDoramaCadastrado({
            titulo,
            episodios,
            link,
            poster,
            genero
        })
        setTitulo('')
        setEpisodios('')
        setLink('')
        setPoster('')
        setGenero('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Dorama</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite o título" 
                    valor={titulo}
                    aoAlterado={valor => setTitulo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Episódios" 
                    placeholder="Digite a quantidade de episódios" 
                    valor={episodios}
                    aoAlterado={valor => setEpisodios(valor)}
                />
                 <CampoTexto 
                    label="Onde assistir" 
                    placeholder="Digite o endereço de onde assistir"
                    valor={link}
                    aoAlterado={valor => setLink(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Poster" 
                    placeholder="Digite o endereço do poster" 
                    valor={poster}
                    aoAlterado={valor => setPoster(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Genêro" 
                    itens={props.generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario