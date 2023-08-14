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

/**
 * The main game loop
 */
const background = new Sprite(0, 0, canvas.width, canvas.height, 'assets/images/bg.jpg')

const gameLoop = () => {
    gameId = requestAnimationFrame(gameLoop)
    context.clearRect(0, 0, canvas.width, canvas.height)
    word.move()
}

const init = () => {
    generateRandomWord()
    gameLoop()
}

init()



