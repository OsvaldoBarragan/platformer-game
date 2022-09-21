import { inWater, world } from './canvas'
const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')

// function createImage(imageSrc) {
//     const image = new Image()
//     image.src = imageSrc
//     return image
// }

canvas.width = 1000
canvas.height = 500
inWater
world

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

        if (inWater === true) {
            this.spriteHeight = this.image.height / 1.5
        }
        else if (inWater === false) {
            this.spriteHeight = this.image.height
        }
    }
}

// Building
export class Building {
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

export class Door {
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

export class Water {
    constructor({ image, x, y }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.cols = 2
        this.rows = 1
        this.spriteWidth = this.image.width / this.cols
        this.spriteHeight = this.image.height / this.rows
        this.totalFrames = 2
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
        if (this.framesDrawn >= 20) {
            this.currentFrame++
            this.framesDrawn = 0
        }
        this.draw()
    }
}
