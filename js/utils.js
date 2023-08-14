/**
 * Generate a random item from an array
 * @param {Array} allowedValues the array of values from which you want to select a random item
 * @returns the random item
 */
const generateRandom = (allowedValues) => {
    const randomIndex = Math.floor(Math.random() * allowedValues.length);
    return allowedValues[randomIndex];
}

/**
 * 
 * @param {int} animationId the animation id of the animation you want to stop 
 * @param {Array <int>} intervalIds all the intervals that needs to be cleared
 */
const stopAnimation = (animationId, intervalIds) => {
    cancelAnimationFrame(animationId)
    intervalIds.forEach(intervalId => {
        clearInterval(intervalId)
    })
}

/**
 * Generates a random color with a random opacity
 * @returns the color in rgba format
 */
const getRandomColor = () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let opacity = 1

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}