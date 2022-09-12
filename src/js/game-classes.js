const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')

// function createImage(imageSrc) {
//     const image = new Image()
//     image.src = imageSrc
//     return image
// }

canvas.width = 1000
canvas.height = 500

// building class
export class Background {
    constructor({ image }) {
        this.position = {
            x: 0,
            y: 0
        }
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
    update() {
        this.draw()
    }
}

// player class
export class Player {
    constructor({ image, x, y }) {
        this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.image = image
        this.cols = 3
        this.spriteWidth = this.image.width / this.cols
        this.spriteHeight = this.image.height
        this.totalFrames = 3
        this.currentFrame = 0
        this.srcX = 0
        this.srcY = 0
        this.framesDrawn = 0
    }
    draw() {
        this.currentFrame = this.currentFrame % this.totalFrames
        this.srcX = this.currentFrame * this.spriteWidth
        c.drawImage(
            this.image,
            this.srcX,
            this.srcY,
            this.spriteWidth,
            this.spriteHeight,
            this.position.x,
            this.position.y,
            this.spriteWidth,
            this.spriteHeight)
    }
    update() {
        this.framesDrawn++
        if (this.framesDrawn >= 10) {
            this.currentFrame++
            this.framesDrawn = 0
        }
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

// these are objects the user can go through
export class PermeableObjects {
    constructor({ image, x, y }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// these are objects the user cannot go through
export class OtherObjects {
    constructor({ image, x, y }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
