let numParrots = parseInt(prompt('Digite o número de cartas entre (4---14)')) / 2//Limita o for e adiciona apenas os pares pedidos pelo usuario 

let parrots = ['bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot']


function start(){
    createCardsParrots(parrots)
}

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
        document.querySelector('#gameBoard').innerHTML+

`<div name="${card.name}" identificador="${card.id}" class="card flip" onclick="clickCard(this)">
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