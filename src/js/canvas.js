import { background, player, buildings, objects } from './levels/level2'


// const canvas = document.querySelector('canvas')
const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')

console.log(background)

canvas.width = 1024
canvas.height = 576

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

  // prevent player from traveling out of the background top
  if (player.position.y + player.image.height >= background.position.y
    && player.position.y + player.image.height + player.velocity.y <= background.position.y
  ) {
    player.velocity.y += 10
  }

  if (player.position.x < 0) {
    player.velocity.x = 0
  }


  if (keys.right.pressed && player.position.x < 800) {
    player.velocity.x = 3
  }
  else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -3
  } else {
    player.velocity.x = 0

    // the world moves back
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
      // the world moves to the front
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
      // console.log('Building Height: ', building.image.height)
      // console.log('Building Width: ', building.image.width)
      player.velocity.y = 0
    }
  })

  objects.forEach(object => {
    const determineClimbableLeft = player.image.height / 1.5
    const determineClimbableRight = player.image.height / 3

    if (player.position.y + player.image.height <= object.position.y
      && player.position.y + player.image.height + player.velocity.y >= object.position.y
      // will allow player to fall off the sides
      && player.position.x + player.image.width >= object.position.x + 5
      && player.position.x <= object.position.x + object.image.width
    ) {
      player.velocity.y = 0
      console.log(object.image.height)
      if (object.climbable === true) {
        if (keys.down.pressed) {
          if (player.position.y > canvas.height - player.image.height) {
            player.velocity.y -= 5
          }
          player.velocity.y = 1
        }
      }
    }
    // Conditionals to see where character has to be before being able to climb
    if (object.climbable === true) {
      if (object.position.y - player.image.height < player.position.y
      && object.position.y + object.image.height > player.position.y
      // Determines how much of the character
      // has to be on ladder in order to stay on
      && object.position.x - determineClimbableLeft < player.position.x
      && (object.position.x + object.image.width) - determineClimbableRight > player.position.x) {
        if (keys.up.pressed) {
          player.velocity.y = -1
        }
        else if (keys.down.pressed) {
          if (object.position)
          player.velocity.y = 2
          console.log(determineClimbableLeft)
          console.log(determineClimbableRight)
        }
        else {
          player.velocity.y = 0
        }
      }
    }

    // prevent player from going past limitation wall
    if (player.position.x + (player.image.width) + player.velocity.x
      <= object.position.x - ((background.image.width - player.image.width) / 1.75)
    ) {
      player.velocity.x += 10
    }
  })


  // If the end is reached, do this
  if (scrollOffset > 2000) {
    console.log('You Win!')
  }
}
// console.log(player.image.height)
animate()


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
      console.log(player.position.x)
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
