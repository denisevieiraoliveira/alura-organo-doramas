import './campo.css'

const CampoCor = (props) => {

    const capturarCor = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-cor">
            <label>{props.label}</label>
            <input type='color' value={props.valor} onChange={capturarCor} required={props.obrigatorio} />
        </div>
    )
}

export default CampoCor