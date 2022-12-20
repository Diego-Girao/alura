let livros = []
const urlAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosAPI()
const elementoInserirLivros = document.getElementById("livros")

async function getBuscarLivrosAPI() {
	const res = await fetch(urlAPI)
	livros = await res.json()
	console.table(livros)
	exibirLivros(livros)
}

function exibirLivros(listaDeLivros) {
	listaDeLivros.forEach((livro) => {
		elementoInserirLivros.innerHTML += `
    <div class="livro">
      <img class="livro__imagens" src=${livro.imagem} alt=${livro.alt} />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
	})
}