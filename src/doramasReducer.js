export const ADICIONAR_DORAMA = "ADICIONAR_DORAMA";
export const DELETAR_DORAMA = "DELETAR_DORAMA";
export const RESOLVER_FAVORITO = "RESOLVER_FAVORITO";

const doramasReducer = (estado, acao) => {
  switch (acao.tipo) {
    case ADICIONAR_DORAMA:
      // Verifica se já existe um gênero com o mesmo nome
      const doramaExistente = estado.some(
        (dorama) => dorama.titulo === acao.novoDorama.titulo
      );
      if (doramaExistente) {
        alert("Não são permitidos doramas com o mesmo título!");
        return estado; // Retorna o estado sem alterações
      }
      return [...estado, acao.novoDorama]; // Adiciona o novo gênero caso não seja duplicado

    case DELETAR_DORAMA:
      return estado.filter((dorama) => dorama.id !== acao.id);

    case RESOLVER_FAVORITO:
      return estado.map((dorama) =>
        dorama.id === acao.id
          ? { ...dorama, favorito: !dorama.favorito }
          : dorama
      );

    default:
      return estado;
  }
};

export default doramasReducer;
