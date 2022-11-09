//variaveis de controle de interface
let qs = (selector) => document.querySelector(selector);
let seuVotoPara = qs('.d-1-1 span ');
let titulo = qs('.d-1-2 span');
let infoCandidatos = qs('.d-1-4');
let infoRodape = qs('.d-2');
let candidatos = qs('.d-1-right');
let numeros = qs('.d-1-3');

//variaveis de controle de ambiente

let etapaAtual = 0
let numero = ''
let vtBranco = false
let votos = []

function comecarEtapa() {
  vtBranco = false
  numero = ''
  let etapa = etapas[etapaAtual];
  let numeroHtml = ''
  for (i = 1; i < etapa.numeros; i++) {
    if (i === 1) {
      numeroHtml += '<div class="numero pisca"></div>'
    }
    numeroHtml += '<div class="numero"></div>'
  }


  seuVotoPara.style.display = 'none'
  titulo.innerHTML = etapa.titulo;
  infoCandidatos.innerHTML = ''
  infoRodape.style.display = 'none'
  candidatos.innerHTML = ''
  numeros.innerHTML = numeroHtml


}

function atualizaInterface() {
  let etapa = etapas[etapaAtual];
  let cand = etapa.candidatos.filter((item) => {
    if (numero === item.numero) {
      return true
    } else {
      return false
    }
  })
  if (cand.length > 0) {
    cand = cand[0]
    seuVotoPara.style.display = 'block'
    infoCandidatos.innerHTML = `Nome: ${cand.nome}<br/>Partido: ${cand.partido}`
    infoRodape.style.display = 'block'

    let fotosHtml = '';
    for (let i in cand.fotos) {
      if (cand.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small"><img src="images/${cand.fotos[i].url}" alt="">${cand.fotos[i].legenda}</div>`
      } else {
        fotosHtml += `<div class="d-1-image"><img src="images/${cand.fotos[i].url}" alt="">${cand.fotos[i].legenda}</div>`
      }
    }
    candidatos.innerHTML = fotosHtml;
  } else {
    seuVotoPara.style.display = 'block'
    infoRodape.style.display = 'block'
    infoCandidatos.innerHTML = '</br><div class="aviso--grande pisca">VOTO NULO</div>'
  }

}


//funçoes de click
const clicou = (num) => {
  let elNum = numeros.querySelector('.pisca')
  if (elNum != null) {
    elNum.innerHTML = num
    numero = `${numero}${num}`
    elNum.classList.remove('pisca')
    if (elNum.nextElementSibling != null) {
      elNum.nextElementSibling.classList.add('pisca')
    } else {
      atualizaInterface()
    }
  }

}
const branco = () => {
  vtBranco = true
  seuVotoPara.style.display = 'block'
  infoRodape.style.display = 'block'
  candidatos.innerHTML = ''
  numeros.innerHTML = ''
  infoCandidatos.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'

}
const corrige = () => {
  comecarEtapa()
}

const confirma = () => {
  if (numero != '' && numero.length === etapas[etapaAtual].numeros || vtBranco === true) {
    etapaAtual++
    if (etapaAtual < etapas.length) {
      comecarEtapa()
    } else {
      qs('.tela').innerHTML = '<div class="aviso--grande fim pisca">FIM</div>'
    }
  }


}

comecarEtapa()