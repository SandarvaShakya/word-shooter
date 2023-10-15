class Word {
    constructor(word, x, y, color){
        this.word = word
        this.x = x
        this.y = y
        this.width = Math.ceil(context.measureText(this.word).width)
        this.color = color
        this.dy = 3
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