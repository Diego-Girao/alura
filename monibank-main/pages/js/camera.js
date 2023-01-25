const btnIniciarCamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const btnTirarFoto = document.querySelector("[data-tirar-foto")
const canva = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")

let imagemURL = ""

btnIniciarCamera.addEventListener("click", async function () {
	const iniciarVideo = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false,
	})
	btnIniciarCamera.style.display = "none"
	campoCamera.style.display = "block"

	video.srcObject = iniciarVideo
})

btnTirarFoto.addEventListener("click", function () {
	canva.getContext("2d").drawImage(video, 0, 0, canva.width, canva.height)
	imagemURL = canva.toDataURL("image/jpeg")

	campoCamera.style.display = "none"
	mensagem.style.display = "block"
})
