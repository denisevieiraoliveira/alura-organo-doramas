
import './rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <ul>
            <li className='redes'>
                <a href='https://www.instagram.com/denise.vieira90/#' target='_blank'>
                    <img src='/imagens/ig.png' alt='Logo instagram' />
                </a>
            </li>
            <li className='logo'>
                <img src='/imagens/logo.png' alt='Logo Organo' />
            </li>
            <li> Desenvolvido por Denise.</li>
        </ul>
    </footer>)
}

export default Rodape