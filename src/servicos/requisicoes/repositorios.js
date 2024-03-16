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