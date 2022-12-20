let livros = []
const urlAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosAPI()

async function getBuscarLivrosAPI() {
	const res = await fetch(urlAPI)
	livros = await res.json()
	let livrosComDesconto = aplicarDesconto(livros)
	exibirLivros(livrosComDesconto)
}
