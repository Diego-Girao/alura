async function buscaEndereco(cep) {
	const mensagemErro = document.getElementById("erro")
	mensagemErro.innerHTML = ""
	try {
		const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
		const consultaCepConvertido = await consultaCep.json()
		if (consultaCepConvertido.erro) {
			throw Error("CEP informado não existe !")
		}
		const cidade = document.getElementById("cidade")
		const logradouro = document.getElementById("endereco")
		const estado = document.getElementById("estado")
		const bairro = document.getElementById("bairro")

		cidade.value = consultaCepConvertido.localidade
		logradouro.value = consultaCepConvertido.logradouro
		estado.value = consultaCepConvertido.uf
		bairro.value = consultaCepConvertido.bairro

		console.log(consultaCepConvertido)
		return consultaCepConvertido
	} catch (erro) {
		mensagemErro.innerHTML = `<p>CEP inválido, tente novamente !</p>`
		console.log(erro)
	}
}
const buscaCep = document.getElementById("cep")
cep.addEventListener("focusout", () => buscaEndereco(cep.value))
