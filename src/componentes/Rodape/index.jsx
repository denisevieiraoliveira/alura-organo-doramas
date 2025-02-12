
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
            <ul>
                <li> Desenvolvido por Denise durante o curso de React da Alura.</li>
            </ul>
        </section>
    </footer>)
}

export default Rodape