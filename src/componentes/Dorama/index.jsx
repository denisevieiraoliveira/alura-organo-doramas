import { IoCloseCircle } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import './dorama.css'

const Dorama = ({ dorama, cor, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(dorama.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='dorama'>
            <div className='cabecalho' style={{ backgroundColor: cor }}>
                <IoCloseCircle 
                    size={25} 
                    className='deletar' 
                    onClick={() => aoDeletar(dorama.id)}
                />
                <div className='favoritar'>
                    {dorama.favorito 
                        ? <IoIosHeart {...propsFavorito} color='#373531' /> 
                        : <IoIosHeartEmpty {...propsFavorito} />                
                    }
                </div>
                <img src={dorama.poster} alt={dorama.titulo} />
            </div>
            <div className='rodape'>
                <h4>{dorama.titulo}</h4>
                <p className='genero'>({dorama.genero})</p>
                <p className='episodios'>{dorama.episodios} episódios</p>
                <a href={dorama.link} target='_blank' style={{ color: cor }}>Assista agora</a>
            </div>
        </div>
    )
}

export default Dorama