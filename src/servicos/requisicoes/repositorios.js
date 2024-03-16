import api from "../api";

export async function buscaRepositorio(usuarioId) {
  try {
    const resultado = await api.get(`/repos?postId=${usuarioId}`)
    return resultado.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function atualizaRepositorio(postId, name, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      name: name,
      data: data,
      postId: postId,
      id: id
    })
    return 'Sucesso'
  } catch (error) {
    console.log(error);
    return 'Erro'
  }
}

export async function criaRepositorio(postId, name, data) {
  try {
    await api.post('/repos', {
      name: name,
      data: data,
      postId: postId
    })

    return 'Sucesso'
  } catch (error) {
    console.log(error);
    return 'Erro'
  }
}