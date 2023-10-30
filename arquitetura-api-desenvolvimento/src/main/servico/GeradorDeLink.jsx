function GeradorDeLink() {

    const Campeao = require("../Arquivos/Campeao");
    const [imagemAleatoria, setImagemAleatoria] = useState('');

    const gerarNumeroAleatorio = () => {
        return Math.random(0, 155);
    };

    const obterImagemAleatoria = () => {
        const numeroAleatorio = gerarNumeroAleatorio(0, Campeao.length - 1);
        setImagemAleatoria(Campeao[numeroAleatorio]);
    };

    return (
        <div>
            {imagemAleatoria && (
                <img src={imagemAleatoria} alt="Ícone do Campeão" />
            )}
        </div>
    );
}

export default GeradorDeLink;