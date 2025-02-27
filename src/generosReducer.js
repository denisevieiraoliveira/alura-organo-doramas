export const ADICIONAR_GENERO = "ADICIONAR_GENERO"
export const MUDAR_COR_GENERO = "MUDAR_COR_GENERO";

const generosReducer = (estado, acao) => {
    switch (acao.tipo) {
        case ADICIONAR_GENERO:
            // Verifica se já existe um gênero com o mesmo nome
            const generoExistente = estado.some(genero => genero.nome === acao.novoGenero.nome);
            if (generoExistente) {
                alert('Não são permitidos gêneros duplicados!');
                return estado; // Retorna o estado sem alterações
            }
            return [...estado, acao.novoGenero]; // Adiciona o novo gênero caso não seja duplicado
        
        case MUDAR_COR_GENERO:
            return estado.map((genero) =>
                genero.id === acao.id 
                    ? { ...genero, cor: acao.novaCor } 
                    : genero
            );

        default:
            return estado;
    }
}

export default generosReducer;


// return estado.map((dorama) =>
//     dorama.id === acao.id
//       ? { ...dorama, favorito: !dorama.favorito }
//       : dorama
//   );