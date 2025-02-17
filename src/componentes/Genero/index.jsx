import hexToRgba from 'hex-to-rgba'
import Dorama from '../Dorama'
import './genero.css'

const Genero = ({ genero, doramas, aoDeletar, aoFavoritar, mudarCor }) => {
    return (
        (doramas.length > 0) ? 
            <section className='genero' style={{ backgroundColor: hexToRgba(genero.cor, 0.3)}}>
                <input value={genero.cor} onChange={evento => mudarCor(evento.target.value, genero.id)} type='color' className='input-cor' />
                <h3 style={{ borderColor: genero.cor }}>{genero.nome}</h3>
                <div className='doramas'>
                    {doramas.map((dorama, indice) => {
                        return <Dorama 
                            key={indice} 
                            dorama={dorama} 
                            cor={genero.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar} 
                        />
                    })}
                </div>
            </section>
        : ''
    )
}

export default Genero