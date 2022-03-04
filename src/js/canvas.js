// /* eslint-disable */
// import { background, player, buildings, objects, moveToNextLevel } from './levels/level1'
// import * as level1 from './levels/level1'
// import * as level2 from './levels/level2'
// import * as level3 from './levels/level3'

// import { background, player, buildings, objects } from './levels/level2'

import * as level1 from './levels/level1'
import * as level2 from './levels/level2'
import * as level3 from './levels/level3'
import * as level4 from './levels/level4'

// const canvas = document.querySelector('canvas')
const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')


canvas.width = 1024
canvas.height = 576

let level = level1
let pow = false


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

  level.background.update()

  level.buildings.forEach(building => {
    building.draw()
  })

  level.objects.forEach(object => {
    object.draw()
  })

  level.player.update()

  level.moveToNextRound.draw()
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

  // prevent level.player from traveling out of the level.background top
  if (level.player.position.y + level.player.image.height >= level.background.position.y
    && level.player.position.y + level.player.image.height + level.player.velocity.y <= level.background.position.y
  ) {
    level.player.velocity.y += 10
  }

  if (level.player.position.x < 0) {
    level.player.velocity.x = 0
  }


  if (keys.right.pressed && level.player.position.x < 800) {
    level.player.velocity.x = 3
  }
  else if (keys.left.pressed && level.player.position.x > 100) {
    level.player.velocity.x = -3
  } else {
    level.player.velocity.x = 0

    // the world moves back
    if (keys.right.pressed) {
      scrollOffset += 3
        level.buildings.forEach(building => {
        building.draw()
        building.position.x -= 3
      })
      // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x -= 3
      //   // enemy.velocity.x = 0
      // })
      level.objects.forEach(object => {
        object.draw()
        object.position.x -= 3
      })
      level.moveToNextRound.draw()
      level.moveToNextRound.position.x -= 3
      // the world moves to the front
    } else if (keys.left.pressed) {
      scrollOffset -= 3
      level.buildings.forEach(building => {
        building.draw()
        building.position.x += 3
      })
      // enemies.forEach(enemy => {
      //   enemy.update()
      //   enemy.position.x += 3
      //   // enemy.velocity.x = 0
      // })
      level.objects.forEach(object => {
        object.draw()
        object.position.x += 3
      })
      level.moveToNextRound.draw()
      level.moveToNextRound.position.x += 3
    }
  }

  level.buildings.forEach(building => {
    // platform collision detection
      // will keep level.player on top of platform
    if (level.player.position.y + level.player.image.height <= building.position.y
      && level.player.position.y + level.player.image.height + level.player.velocity.y >= building.position.y
      // will allow level.player to fall off the sides
      && level.player.position.x + level.player.image.width >= building.position.x + 5
      && level.player.position.x <= building.position.x + building.image.width
    ) {
      // console.log('Building Height: ', building.image.height)
      // console.log('Building Width: ', building.image.width)
      level.player.velocity.y = 0
    }
  })

  level.objects.forEach(object => {
    const determineClimbableLeft = level.player.image.height / 1.5
    const determineClimbableRight = level.player.image.height / 3

    if (object.limitationWall === true) {
      // prevent level.player from going past limitation wall
      if (level.player.position.x + (level.player.image.width) + level.player.velocity.x
        <= object.position.x + 20
      ) {
        level.player.velocity.x += 10
      }
    }

    if (level.player.position.y + level.player.image.height <= object.position.y
      && level.player.position.y + level.player.image.height + level.player.velocity.y >= object.position.y
      // will allow level.player to fall off the sides
      && level.player.position.x + level.player.image.width >= object.position.x + 5
      && level.player.position.x <= object.position.x + object.image.width
    ) {
      level.player.velocity.y = 0
      console.log(object.image.height)
      if (object.climbable === true) {
        if (keys.down.pressed) {
          if (level.player.position.y > canvas.height - level.player.image.height) {
            level.player.velocity.y -= 5
          }
          level.player.velocity.y = 1
        }
      }
    }
    // Conditionals to see where character has to be before being able to climb
    if (object.climbable === true) {
      if (object.position.y - level.player.image.height < level.player.position.y
      && object.position.y + object.image.height > level.player.position.y
      // Determines how much of the character
      // has to be on ladder in order to stay on
      && object.position.x - determineClimbableLeft < level.player.position.x
      && (object.position.x + object.image.width) - determineClimbableRight > level.player.position.x) {
        if (keys.up.pressed) {
          level.player.velocity.y = -1
        }
        else if (keys.down.pressed) {
          // if (object.position)
          level.player.velocity.y = 2
          if (object.position.y + object.image.height === 576) {
            // level.player.velocity.y = 0
            console.log(level.player.position.y)
            if (level.player.position.y > 576 - level.player.image.height) {
              level.player.velocity.y = 0
            }
          }
          // console.log(determineClimbableLeft)
          // console.log(determineClimbableRight)
        }
        else {
          level.player.velocity.y = 0
        }
      }
    }

  })

  const determineClimbableLeft = level.player.image.height / 1.5
  const determineClimbableRight = level.player.image.height / 3

  if (level.moveToNextRound.position.y - level.player.image.height < level.player.position.y
  && level.moveToNextRound.position.y + level.moveToNextRound.image.height > level.player.position.y
  // Determines how much of the character
  // has to be on ladder in order to stay on
  && level.moveToNextRound.position.x - determineClimbableLeft < level.player.position.x
  && (level.moveToNextRound.position.x + level.moveToNextRound.image.width) - determineClimbableRight > level.player.position.x) {
    if (keys.up.pressed) {
      level.player.velocity.y = 0
      pow = true
    }
  }

  if (level === level1) {
    if (pow === true) {
      level = level2
      // onLevelOne = false
      // onLevelTwo = true
      pow = false
    }
  }
  else if (level === level2) {
    if (pow === true) {
      level = level3
      // onLevelTwo = false
      // onLevelThree = true
      pow = false
    }
  }
  else if (level === level3) {
    if (pow === true) {
      level = level4
    }
  }
}

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
      if (keys.up.pressed === false && level.player.velocity.y >= 0) {
        if (level.player.velocity.y > 0) {
          break
        }
        keys.up.pressed = true
        level.player.velocity.y -= 10
        break
      }
      // keys.up.pressed = true
      // console.log('Up Key: ', keys.up.pressed)
      // level.player.velocity.y -= 10
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
      // level.player.velocity.y += 5
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
