import './campo.css'

const Campo = ({label, placeholder, valor, tipo, aoAlterado, obrigatorio=false}) => {

    const aoDigitado = (evento) => {
       aoAlterado(evento.target.value)
    }

    return(
        <div className={`campo campo-${tipo}`}>
            <label>{label}</label>
            <input 
                value={valor} 
                type={tipo} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder} 
            />
        </div>
    )
}

export default Campo