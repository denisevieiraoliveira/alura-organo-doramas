import './formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ({ generos, aoCadastrar, cadastrarGenero }) => {

    const [titulo, setTitulo] = useState('')
    const [episodios, setEpisodios] = useState('')
    const [link, setLink] = useState('')
    const [poster, setPoster] = useState('')
    const [genero, setGenero] = useState('')
    const [nomeGenero, setNomeGenero] = useState('')
    const [corGenero, setCorGenero] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
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

    const aoSubmeterGenero = (evento) => {
        evento.preventDefault();
        cadastrarGenero({
            nome: nomeGenero,
            cor: corGenero
        })
        setNomeGenero('')
        setCorGenero('')
    }

    return (
        <section className='formulario-container'>
            <form className='formulario' onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do Dorama</h2>
                <Campo
                    obrigatorio={true}
                    label='Título'
                    placeholder='Digite o título'
                    valor={titulo}
                    tipo='text'
                    aoAlterado={valor => setTitulo(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label='Episódios'
                    placeholder='Digite a quantidade de episódios'
                    valor={episodios}
                    tipo='number'
                    aoAlterado={valor => setEpisodios(valor)}
                />
                <Campo
                    label='Onde assistir'
                    placeholder='Digite o link de onde assistir'
                    valor={link}
                    tipo='url'
                    aoAlterado={valor => setLink(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label='Poster'
                    placeholder='Digite o link do poster'
                    valor={poster}
                    tipo='url'
                    aoAlterado={valor => setPoster(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Genêro'
                    itens={generos}
                    valor={genero}
                    aoAlterado={valor => setGenero(valor)}
                />
                <Botao texto='Criar card' />
            </form>
            <form className='formulario' onSubmit={aoSubmeterGenero}>
                <h2>Preencha os dados para criar um novo gênero</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do gênero'
                    tipo='text'
                    valor={nomeGenero}
                    aoAlterado={valor => setNomeGenero(valor)}
                />
                <Campo
                    obrigatorio
                    label='Cor'
                    tipo='color'
                    valor={corGenero}
                    aoAlterado={valor => setCorGenero(valor)}
                />
                <Botao texto='Criar um novo gênero' />
            </form>
        </section>
    )
}

export default Formulario