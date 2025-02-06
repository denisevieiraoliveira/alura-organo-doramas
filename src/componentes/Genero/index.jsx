import Dorama from '../Dorama'
import './Genero.css'

const Genero = (props) => {
    return(
        (props.doramas.length > 0) ? <section className='genero' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='doramas'>
                {props.doramas.map(dorama => <Dorama 
                    key={dorama.titulo}
                    titulo={dorama.titulo} 
                    episodios={dorama.episodios} 
                    link={dorama.link} 
                    poster={dorama.poster} 
                    genero={dorama.genero}
                    cor={props.corPrimaria}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Genero