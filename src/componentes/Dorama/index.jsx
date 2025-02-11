import './Dorama.css'

const Dorama = ({titulo, episodios, link, poster, genero, cor}) => {
    return(
        <div className='dorama'>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <div className='episodios'>
                    <p>{episodios}</p>
                </div>
                <img src={poster} alt={titulo} />
            </div>
            <div className='rodape'>
                <h4>{titulo}</h4>
                <p>{genero}</p>
                <a href={link} target='_blank' style={{color: cor}}>Assista agora</a>
            </div>
        </div>
    )
}

export default Dorama