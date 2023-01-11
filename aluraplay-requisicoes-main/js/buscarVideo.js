import { conectaApi } from "./conectaApi.js"
import montarCard from "./mostrarVideos.js"

async function buscarVideo(evento) {
	evento.preventDefault()

	const dadosPesquisa = document.querySelector("[data-pesquisa]").value
	const busca = await conectaApi.buscaVideo(dadosPesquisa)

	const lista = document.querySelector("[data-lista]")

	while (lista.firstChild) {
		lista.removeChild(lista.firstChild)
	}

	busca.forEach((elemento) =>
		lista.appendChild(
			montarCard(
				elemento.titulo,
				elemento.descricao,
				elemento.url,
				elemento.imagem
			)
		)
	)
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento))
