class Sprite{
    constructor(x, y, width, height, imgSrc){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.loaded = false
        this.img = new Image()
        this.img.src = imgSrc
        this.img.onload = () => {
            this.loaded = true
        }
    }

    draw(){
        if(this.loaded){
            context.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }
}