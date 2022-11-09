//variaveis de controle de interface
let qs = (selector) => document.querySelector(selector)
let seuVotoPara = qs('.d-1-1 span ')
let titulo = qs('.d-1-2 span')
let infoCandidatos = qs('d-1-4')
let infoRodape = qs('.d-2').in
let candidatos = qs('.d-1-right')
let numeros = qs('.d-1-3')

//variaveis de controle de ambiente

let etapaAtual = 0

function comecarEtapa() {
  seuVotoPara.style.display = 'none'
  titulo.innerHTML = etapas.titulo
}



//funçoes de click
const clicou = (num) => {
  numeros.querySelector('.pisca').innerHTML = num
}
const branco = () => {

}
const corrige = () => {

}

const confirma = () => {

}

comecarEtapa()