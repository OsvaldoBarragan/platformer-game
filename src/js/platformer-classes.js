// import character from  '../sprites/player/character_2.png'

// function createImage(imageSrc) {
//   const image = new Image()
//   image.src = imageSrc
//   return image
// }

const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
let gravity = 0.5

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
  constructor({ image }) {
    this.position = {
      x: 100,
      y: 561
    }
    this.velocity = {
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
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.image.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity
    }
    else {
      this.velocity.y = 0
    }
  }
}


export class Enemy {
  constructor({ x, y, image, orig_x }) {
    this.position = {
      x: x,
      y: y,
      orig_x: orig_x
    }
    this.velocity = {
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
    this.position.x += this.velocity.x
    // console.log('difference between enemy and player: ', this.position.orig_x - player.position.x)
}}

// building class
export class Building {
  constructor({ x, y, image }) {
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

export class Objects {
  constructor({ x, y, image, climbable, limitationWall }) {
    this.position = {
      x: x,
      y: y
    }
    this.image = image
    this.climbable = climbable
    this.limitationWall = limitationWall
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

export class MoveToNextRound {
  constructor({ x, y, image }) {
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
