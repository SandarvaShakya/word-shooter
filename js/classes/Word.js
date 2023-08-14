class Word {
    constructor(word, x, y, color){
        this.word = word
        this.x = x
        this.y = y
        this.color = color
        this.dy = 5
    }

    draw(){
        context.fillStyle = this.color
        context.font = "bold 32px 'Courier New', Courier, monospace"
        context.fillText(this.word, this.x, this.y)
    }

    move(){
        this.x += this.dy
        this.draw()
    }
}