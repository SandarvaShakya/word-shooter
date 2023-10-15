const canvas = document.getElementById('canvas')
/** @type {HTMLCanvasElement} */
const context = canvas.getContext('2d')

canvas.width = 900
canvas.height = 500

// random word selected from WORDS array
let wordText = generateRandom(WORDS)
// width of the text
let textWidth = Math.floor(context.measureText(wordText).width)
// color of the text
let wordColor = getRandomColor()
// First Random Word
let word = new Word(wordText, -textWidth, canvas.height / 2 - 32, wordColor)

const playerInput = document.getElementById('player-input')
/**
 * The main game loop
 */
const gameLoop = () => {
    gameId = requestAnimationFrame(gameLoop)
    context.clearRect(0, 0, canvas.width, canvas.height)

    if(word.x > canvas.width){
        playerInput.value = ''
        generateWord()
    }

    // if(word.word === playerInput.value){
    //     playerInput.value = ''
    // }

    word.move()
}

const init = () => {
    generateWord()
    gameLoop()
}

init()

playerInput.addEventListener('keydown', (event) => {
    if(event.code === 'Space' || event.code === 'Enter'){
        if(event.target.value.trim() === word.word){
            event.target.value = ''
            generateWord()
        }
    }
})



