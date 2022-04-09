let contador = null
let igualdade = false
let numJogadas = 0;
let contagem = 0;
let seg;



let numParrots = parseInt(prompt('Digite o número de cartas entre (4---14)')) / 2
//Limita o for e adiciona apenas os pares pedidos pelo usuario (quando for numero impar ele força ser par)

while (numParrots > 7 || numParrots < 2) {
    numParrots = parseInt(prompt('Digite o número de cartas entre (4---14)')) / 2
    //Validação para que o usuario nao coloque valores acima de 14 
}

let parrots = ['bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot']


function createCardsParrots(parrots) {

    let cards = []
    for (let i = 0; i < numParrots; i++) {
        cards.push(createCard(parrots[i]))//Cria a primeira carta do tipo de parrot e coloca no vetor
        cards.push(createCard(parrots[i]))//Cria a segunda  carta do mesmo tipo de parrot da primeira e coloca no vetor
    }
    // console.log(cards) //Nessa linha estamos com o ARRAY das cartas pedidas pelo usuarios
    let tamanho = cards.length

    shuffleCards(cards, tamanho)

    addCards(cards)



}

createCardsParrots(parrots)


function createCard(parrot) {
    let parrotCard = {
        name: parrot,
        id: parrot + createMathRadom(),
        img: parrot + '.gif',
        fliped: false
    }
    return parrotCard
}


function createMathRadom() {
    return parseInt(Math.random() * 1000)
}


function shuffleCards(cartas, tam) {

    let currentIndex = tam - 1 //O menos -1 serviu par trar o undefined
    //let currentIndex = cartas.lenght
    let numRandomIndex = null


    while (currentIndex !== 0) {
        numRandomIndex = Math.floor(Math.random() * currentIndex)

        let aux = cartas[currentIndex]
        cartas[currentIndex] = cartas[numRandomIndex]
        cartas[numRandomIndex] = aux

        currentIndex--

    }

    //console.log(cartas)

    for (let cards of cartas) {
        // console.log(cards)
    }

}


function addCards(cartas) {
    //console.log(cartas.length)

    for (let card of cartas) {
        document.querySelector('#gameBoard').innerHTML =
            document.querySelector('#gameBoard').innerHTML +

            `<div name="${card.name}" identificador="${card.id}" flip="${card.fliped}" class="card" onclick="clickCard(this)">
        <div class="card-Front">
            <img src="assets/imagens/${card.name}.gif" alt="">
        </div>
    <div class="card-Back">
        <img src="assets/imagens/versoCard.png" alt="">
    </div>
</div>`
    }
}



// name iguais  e ids diferentes para achar o par


function clickCard(element) {

    if(element.classList.contains("flip")){
        
        console.log('clicou na mesma 2 vezes') //serve para corrigir bug de logica
    }
    else{
    console.log('clicou em uma que nao tem flip')
    numJogadas++
    element.classList.add('flip')
    contador++
    console.log(contador)

    if (contador == 2) {
        console.log('entrou')
        verificarIgualdade()

        if (igualdade == false) {
            setTimeout(() => {
                document.querySelectorAll('.flip').forEach(el => {
                    el.classList.remove('flip')
                    contador = 0
                })
            }, 1000);
        } else {
            document.querySelectorAll('.flip').forEach(el => {
                el.classList.remove('flip')
                el.classList.add('flip-fixed')
                contador = 0
            })
            igualdade = false
            contador = 0
        }
    }

    verificarGameOver()
    }
}

function verificarIgualdade() {
    let verificarSeIgual = document.querySelectorAll('.flip')
    let att1 = verificarSeIgual[0].getAttribute('name')
    let att2 = verificarSeIgual[1].getAttribute('name')



    if (att1 == att2) {
        igualdade = true
    }
    else {
        igualdade = false
    }
}


function verificarGameOver() {
    let tamanho = document.querySelectorAll('.flip-fixed').length
    if (tamanho == (numParrots * 2)) {
        setTimeout(() => {
           clearInterval(seg)
            alert(`Você ganhou em ${numJogadas} jogadas realizadas e ${contagem} segundos de jogo!`)
            let reload = prompt('Deseja jogar novamente: Digite "sim" ou "não"')

            if(reload=='sim'){
                location.reload()
            }
        }, 0);
        
        
    }
}


function timer(){
       seg = setInterval(function tempoDecorrido(){
            document.querySelector('.timer').innerHTML = `${contagem} segundos`
    
            contagem++
        },1000)
    
}

timer()