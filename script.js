document.getElementById('jogador-escolha-1').onclick = function() { jogar(1) }

document.getElementById('jogador-escolha-2').onclick = function() { jogar(2) }

document.getElementById('jogador-escolha-3').onclick = function() { jogar(3) }


var computadorEscolha
var jogadorEscolha

var jogadorPontos = 0
var computadorPontos = 0

// 1 - pedra
// 2- papel
// 3 - tesoura

//sortear entre os numeros
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//calcula e retorna quem ganhou
// 0 empate
// 1 jogador
//2 computador
function calcularEscolha(jogador, computador) {
    if (jogador == computador) {
        return 0
    }

    if (jogador == 1 && computador == 2) {
        return 2
    }

    if (jogador == 1 && computador == 3) {
        return 1
    }

    if (jogador == 2 && computador == 1) {
        return 1
    }

    if (jogador == 2 && computador == 3) {
        return 2
    }

    if (jogador == 3 && computador == 1) {
        return 2
    }

    if (jogador == 3 && computador == 1) {
        return 1
    }
}

function somarPontosJogador() {
    jogadorPontos = jogadorPontos + 1
    document.getElementById('jogador-pontos').innerHTML = `${jogadorPontos}`

}

function somarPontosComputador() {
    computadorPontos = computadorPontos + 1
    document.getElementById('computador-pontos').innerHTML = `${computadorPontos}`
}

function jogar(escolha) {


    jogadorEscolha = escolha

    computadorEscolha = sortear(1, 3)
    ganhador = calcularEscolha(jogadorEscolha, computadorEscolha)

    if (ganhador == 0) {
        document.getElementById('texto').innerHTML = ` Empate !!`
    } else if (ganhador == 1) {
        document.getElementById('texto').innerHTML = ` O vencedor foi o ${jogadorNome}!`
        somarPontosJogador()

    } else if (ganhador == 2) {
        document.getElementById('texto').innerHTML = ` O vencedor foi o Computador!!`
        somarPontosComputador()

    }


    var jogadorNome = prompt('Qual o seu Nome?')

    document.getElementById('texto').innerHTML = ` Bem vindo ${jogadorNome} está preparado? `