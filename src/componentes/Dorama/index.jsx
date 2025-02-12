import { IoCloseCircle } from "react-icons/io5";
import './dorama.css'

const Dorama = ({ dorama, cor, aoDeletar }) => {
    return (
        <div className='dorama'>
            <IoCloseCircle size={25} className='deletar' onClick={aoDeletar} />
            <div className='cabecalho' style={{ backgroundColor: cor }}>
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