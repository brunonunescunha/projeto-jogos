const botoes = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")


botoes.forEach((btn, img, info) => {
    btn.addEventListener("click", () => {
        const btnSelecionado = document.querySelector(".selecionado")
        btnSelecionado.classList.remove("selecionado")

        btn.classList.add("selecionado")

        const imagemAtivo = document.querySelector(".ativo")
        imagemAtivo.classList.remove("ativo")

        imagens[img].classList.add("ativo")

        const infoAtiva = document.querySelector(".ativa")
        infoAtiva.classList.remove("ativa")

        const idDoBtnativa = btn.attributes.id.value

        const infoParaMostrar = document.getElementById("info-" + idDoBtnativa)
        infoParaMostrar.classList.add("ativa")

    })
})
