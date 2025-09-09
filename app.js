'use strict'

const button = document.getElementById('button')

button.addEventListener('click', async () => {
    document.getElementById('imagens').replaceChildren()
    const raca = document.getElementById('barra-pesquisa').value
    const dogs = await buscarImagens(raca)
    for (let i = 0; i < dogs.length; i++) {
        criarimagem(dogs[i])
    }
})

function criarimagem(url) {
    const container = document.getElementById('imagens')
    const imagem = document.createElement('img')
    console.log(url)
    imagem.src = url
    container.appendChild(imagem)
}

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.message)
    return data.message
}