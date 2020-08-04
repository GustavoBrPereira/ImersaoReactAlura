import configs from '../config';

const URL_CATEGORIES = `${configs.URL_BACKEND}/categorias`;

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`).then(
      async(respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
          }

          throw new Error('Não foi possivel pegar os dados :(');
        
      }
    )
}

function getAll() {
    return fetch(`${URL_CATEGORIES}`).then(
      async(respostaDoServidor) => {
          if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
          }

          throw new Error('Não foi possivel pegar os dados :(');
        
      }
    )
}

export default {
    getAllWithVideos,
    getAll,
};