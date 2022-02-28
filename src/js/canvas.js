import building1 from '../sprites/buildings/building_1.png'
import building2 from '../sprites/buildings/building_2.png'
import building3 from '../sprites/buildings/building_3.png'
import building4 from '../sprites/buildings/building_4.png'
import character from  '../sprites/player/character_2.png'
import enemy1 from '../sprites/enemies/enemy_1.png'
import background1 from '../sprites/backgrounds/background_2.png'
import treestem1 from '../sprites/objects/treestem_1.png'
import treestemtop1 from '../sprites/objects/treestemtop_1.png'
import boat1 from '../sprites/objects/boat_1.png'
import ladder1 from '../sprites/objects/ladder_1.png'

console.log(building1)
console.log(building2)
console.log(building3)
console.log(building4)
console.log(character)
console.log(enemy1)
console.log(background1)
console.log(treestem1)
console.log(treestemtop1)
console.log(boat1)
console.log(ladder1)

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

let gravity = 0.5

function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

// building class
class Background {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    }
    this.image = createImage(background1)
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
  update() {
    this.draw()
  }
}

// player class
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 461
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.image = createImage(character)
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


class Enemy {
  constructor({ image, x, y, orig_x }) {
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
class Building {
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

class Objects {
  constructor({ x, y, image, climbable }) {
    this.position = {
      x: x,
      y: y
    }
    this.image = image
    this.climbable = climbable
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

const building1_image = new Image()
building1_image.src = building1

const building2_image = new Image()
building2_image.src = building2

const building3_image = new Image()
building3_image.src = building3

const building4_image = new Image()
building4_image.src = building4

const character_image = new Image()
character_image.src = character

// const enemy1_image = new Image()
// enemy1_image.src = enemy1

const background1_image = new Image()
background1_image.src = background1

// const treestem1_image = new Image()
// treestem1_image.src = treestem1
//
// const treestemtop1_image = new Image()
// treestemtop1_image.src = treestemtop1

const boat1_image = new Image()
boat1_image.src = boat1

const ladder1_image = new Image()
ladder1_image.src = ladder1

// will create the background
const background = new Background({ image: background1_image })

// will create the player
const player = new Player({ image: character_image })
// const enemies = [
//   new Enemy({ image: enemy1_image, x: 80, y: 546, orig_x: 80 })
// ]

// will create the buildings
const buildings = [
  // new Building ({ image: building1_image, x: 100, y: 476 }),
  // new Building ({ image: building1_image, x: 200, y: 476 }),
  // new Building ({ image: building1_image, x: 300, y: 476 }),
  new Building ({ image: building1_image, x: 500, y: 476 }),
  new Building ({ image: building2_image, x: 600, y: 396 }),
  new Building ({ image: building3_image, x: 800, y: 476 })
  // new Building ({ image: building4_image, x: 1000, y: 176})
]

const objects = [
  // // Tree 1
  // new Objects ({ image: treestem1_image, x: 50, y: 556 }),
  // new Objects ({ image: treestemtop1_image, x: 48, y: 553 }),
  // // Tree 2 etc.
  // new Objects ({ image: treestem1_image, x: 10, y: 556 }),
  // new Objects ({ image: treestemtop1_image, x: 8, y: 553 })
  // // not trees
  // new Objects ({ image: boat1_image, x: 50, y: 476 }),
  // new Objects ({ image: boat1_image, x: 600, y: 476 })
  new Objects ({ image: ladder1_image, x: 600, y: 376, climbable: true })
]

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  },
  down: {
    pressed: false
  },
  spacebar: {
    pressed: false
  }
}

let scrollOffset = 0

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  background.update()

  buildings.forEach(building => {
    building.draw()
  })

  objects.forEach(object => {
    object.draw()
  })

  player.update()
  // enemies.forEach(enemy => {
  //   enemy.update()
  // })

  // enemies.forEach(enemy => {
  //   if (enemy.position.x >= enemy.position.orig_x + 100) {
  //     enemy.velocity.x--
  //   }
  //   else if (enemy.position.x <= enemy.position.orig_x - 100) {
  //     enemy.velocity.x++
  //   }
  // })

  if (player.position.y + player.image.height >= background.position.y
    && player.position.y + player.image.height + player.velocity.y <= background.position.y
  ) {
    player.velocity.y += 10
  }


  if (keys.right.pressed && player.position.x < 1000) {
    player.velocity.x = 3
  }
  else if (keys.left.pressed && player.position.x > 20) {
    player.velocity.x = -3
  } else {
    player.velocity.x = 0

    if (keys.right.pressed) {
      scrollOffset += 3
      buildings.forEach(building => {
        building.draw()
        building.position.x -= 3
      })
      // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x -= 3
      //   // enemy.velocity.x = 0
      // })
      objects.forEach(object => {
        object.draw()
        object.position.x -= 3
      })
    } else if (keys.left.pressed) {
      scrollOffset -= 3
      buildings.forEach(building => {
        building.draw()
        building.position.x += 3
      })
      // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x += 3
      //   // enemy.velocity.x = 0
      // })
      objects.forEach(object => {
        object.draw()
        object.position.x += 3
      })
    }
  }

  buildings.forEach(building => {
    // platform collision detection
      // will keep player on top of platform
    if (player.position.y + player.image.height <= building.position.y
      && player.position.y + player.image.height + player.velocity.y >= building.position.y
      // will allow player to fall off the sides
      && player.position.x + player.image.width >= building.position.x + 5
      && player.position.x <= building.position.x + building.image.width
    ) {
      console.log('Building Height: ', building.image.height)
      console.log('Building Width: ', building.image.width)
      player.velocity.y = 0
    }
  })

  objects.forEach(object => {
    if (player.position.y + player.image.height <= object.position.y
      && player.position.y + player.image.height + player.velocity.y >= object.position.y
      // will allow player to fall off the sides
      && player.position.x + player.image.width >= object.position.x + 5
      && player.position.x <= object.position.x + object.image.width
    ) {
      player.velocity.y = 0
      console.log(object.image.height)
    }

    if (object.climbable === true) {
      if (object.position.y - player.image.height < player.position.y
      && object.position.y + object.image.height > player.position.y
      && object.position.x - 5 < player.position.x
      && object.position.x + object.image.width > player.position.x) {
        if (keys.up.pressed) {
          player.velocity.y = -1
        }
        else if (keys.down.pressed) {
          player.velocity.y = 1
        }
        else {
          player.velocity.y = 0
        }
      }
    }
  })


  // If the end is reached, do this
  if (scrollOffset > 2000) {
    console.log('You Win!')
  }
}
// console.log(player.image.height)
animate()

// if (player.velocity.y === 0) {
//   inAir = false
// }

addEventListener('keydown', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      // console.log('left')
      keys.left.pressed = true
      break
  }
  switch (keyCode) {
    case 87:
      // console.log('up')
      if (keys.up.pressed === false && player.velocity.y >= 0) {
        if (player.velocity.y < 0) {
          player.velocity.y += 0
          break
        }
        keys.up.pressed = true
        player.velocity.y -= 10
        break
      }
      // keys.up.pressed = true
      // console.log('Up Key: ', keys.up.pressed)
      // player.velocity.y -= 10
      // break
  }
  switch (keyCode) {
    case 83:
      // console.log('down')
      keys.down.pressed = true
      break
  }
  switch (keyCode) {
    case 68:
      // console.log('right')
      keys.right.pressed = true
      break
  }
})

addEventListener('keyup', ({ keyCode }) => {
  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      // console.log('left')
      keys.left.pressed = false
      break
  }
  switch (keyCode) {
    case 87:
      // console.log('up')
      keys.up.pressed = false
      // player.velocity.y += 5
      break
  }
  switch (keyCode) {
    case 83:
      // console.log('down')
      keys.down.pressed = false
      break
  }
  switch (keyCode) {
    case 68:
      // console.log('right')
      keys.right.pressed = false
      break
  }
})
