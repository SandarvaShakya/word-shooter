/**
 * Selects random word from the WORDS array
 * at a certain interval of time
 */
const generateRandomWord = () => {
    wordIntervalId = setInterval(() => {
        wordText = generateRandom(WORDS)
        textWidth = Math.floor(context.measureText(wordText).width)
        wordColor = getRandomColor()
        word = new Word(wordText, -textWidth, canvas.height / 2 - 32, wordColor)
    }, INTERVAL)
}