// import * as level1 from './levels/level1'
// import * as level2 from './levels/level2'
// // import * as level3 from './levels/level3'
//

// const runLevelTwo = () => {
//   const keys = {
//     right: {
//       pressed: false
//     },
//     left: {
//       pressed: false
//     },
//     up: {
//       pressed: false
//     },
//     down: {
//       pressed: false
//     },
//     spacebar: {
//       pressed: false
//     }
//   }
//
//   let scrollOffset = 0
//
//   function animate2() {
//     const bob = requestAnimationFrame(animate1)
//     c.fillStyle = 'white'
//     c.fillRect(0, 0, canvas.width, canvas.height)
//
//     level2.background.update()
//
//     level2.buildings.forEach(building => {
//       building.draw()
//     })
//
//     level2.objects.forEach(object => {
//       object.draw()
//     })
//
//     level2.player.update()
//
//     level2.moveToNextRound.draw()
//     // enemies.forEach(enemy => {
//     //   enemy.update()
//     // })
//
//     // enemies.forEach(enemy => {
//     //   if (enemy.position.x >= enemy.position.orig_x + 100) {
//     //     enemy.velocity.x--
//     //   }
//     //   else if (enemy.position.x <= enemy.position.orig_x - 100) {
//     //     enemy.velocity.x++
//     //   }
//     // })
//
//     // prevent level2.player from traveling out of the level2.background top
//     if (level2.player.position.y + level2.player.image.height >= level2.background.position.y
//       && level2.player.position.y + level2.player.image.height + level2.player.velocity.y <= level2.background.position.y
//     ) {
//       level2.player.velocity.y += 10
//     }
//
//     if (level2.player.position.x < 0) {
//       level2.player.velocity.x = 0
//     }
//
//
//     if (keys.right.pressed && level2.player.position.x < 800) {
//       level2.player.velocity.x = 3
//     }
//     else if (keys.left.pressed && level2.player.position.x > 100) {
//       level2.player.velocity.x = -3
//     } else {
//       level2.player.velocity.x = 0
//
//       // the world moves back
//       if (keys.right.pressed) {
//         scrollOffset += 3
//         level2.buildings.forEach(building => {
//           building.draw()
//           building.position.x -= 3
//         })
//         // enemies.forEach(enemy => {
//         //   enemy.update()
//         //   enemy.position.x -= 3
//         //   // enemy.velocity.x = 0
//         // })
//         level2.objects.forEach(object => {
//           object.draw()
//           object.position.x -= 3
//         })
//         level2.moveToNextRound.draw()
//         level2.moveToNextRound.position.x -= 3
//         // the world moves to the front
//       } else if (keys.left.pressed) {
//         scrollOffset -= 3
//         level2.buildings.forEach(building => {
//           building.draw()
//           building.position.x += 3
//         })
//         // enemies.forEach(enemy => {
//         //   enemy.update()
//         //   enemy.position.x += 3
//         //   // enemy.velocity.x = 0
//         // })
//         level2.objects.forEach(object => {
//           object.draw()
//           object.position.x += 3
//         })
//         level2.moveToNextRound.draw()
//         level2.moveToNextRound.position.x += 3
//       }
//     }
//
//     level2.buildings.forEach(building => {
//       // platform collision detection
//         // will keep level2.player on top of platform
//       if (level2.player.position.y + level2.player.image.height <= building.position.y
//         && level2.player.position.y + level2.player.image.height + level2.player.velocity.y >= building.position.y
//         // will allow level2.player to fall off the sides
//         && level2.player.position.x + level2.player.image.width >= building.position.x + 5
//         && level2.player.position.x <= building.position.x + building.image.width
//       ) {
//         // console.log('Building Height: ', building.image.height)
//         // console.log('Building Width: ', building.image.width)
//         level2.player.velocity.y = 0
//       }
//     })
//
//     level2.objects.forEach(object => {
//       const determineClimbableLeft = level2.player.image.height / 1.5
//       const determineClimbableRight = level2.player.image.height / 3
//
//       if (level2.player.position.y + level2.player.image.height <= object.position.y
//         && level2.player.position.y + level2.player.image.height + level2.player.velocity.y >= object.position.y
//         // will allow level2.player to fall off the sides
//         && level2.player.position.x + level2.player.image.width >= object.position.x + 5
//         && level2.player.position.x <= object.position.x + object.image.width
//       ) {
//         level2.player.velocity.y = 0
//         console.log(object.image.height)
//         if (object.climbable === true) {
//           if (keys.down.pressed) {
//             if (level2.player.position.y > canvas.height - level2.player.image.height) {
//               level2.player.velocity.y -= 5
//             }
//             level2.player.velocity.y = 1
//           }
//         }
//       }
//       // Conditionals to see where character has to be before being able to climb
//       if (object.climbable === true) {
//         if (object.position.y - level2.player.image.height < level2.player.position.y
//         && object.position.y + object.image.height > level2.player.position.y
//         // Determines how much of the character
//         // has to be on ladder in order to stay on
//         && object.position.x - determineClimbableLeft < level2.player.position.x
//         && (object.position.x + object.image.width) - determineClimbableRight > level2.player.position.x) {
//           if (keys.up.pressed) {
//             level2.player.velocity.y = -1
//           }
//           else if (keys.down.pressed) {
//             // if (object.position)
//             level2.player.velocity.y = 2
//             console.log(determineClimbableLeft)
//             console.log(determineClimbableRight)
//           }
//           else {
//             level2.player.velocity.y = 0
//           }
//         }
//       }
//
//
//       // prevent level2.player from going past limitation wall
//       if (level2.player.position.x + (level2.player.image.width) + level2.player.velocity.x
//         <= object.position.x - ((level2.background.image.width - level2.player.image.width) / 1.75)
//       ) {
//         level2.player.velocity.x += 10
//       }
//     })
//
//     const determineClimbableLeft = level2.player.image.height / 1.5
//     const determineClimbableRight = level2.player.image.height / 3
//
//     if (level2.moveToNextRound.position.y - level2.player.image.height < level2.player.position.y
//     && level2.moveToNextRound.position.y + level2.moveToNextRound.image.height > level2.player.position.y
//     // Determines how much of the character
//     // has to be on ladder in order to stay on
//     && level2.moveToNextRound.position.x - determineClimbableLeft < level2.player.position.x
//     && (level2.moveToNextRound.position.x + level2.moveToNextRound.image.width) - determineClimbableRight > level2.player.position.x) {
//       if (keys.up.pressed) {
//         level2.player.velocity.y = 0
//       }
//     }
//     if (scrollOffset >= 50) {
//       cancelAnimationFrame(bob)
//       c.clearRect(0, 0, canvas.width, canvas.height)
//     }
//   }
//
//   animate2()
//
//
//   addEventListener('keydown', ({ keyCode }) => {
//     // console.log(keyCode)
//     switch (keyCode) {
//       case 65:
//         // console.log('left')
//         keys.left.pressed = true
//         break
//     }
//     switch (keyCode) {
//       case 87:
//         // console.log('up')
//         if (keys.up.pressed === false && level2.player.velocity.y >= 0) {
//           if (level2.player.velocity.y > 0) {
//             break
//           }
//           keys.up.pressed = true
//           level2.player.velocity.y -= 10
//           break
//         }
//         // keys.up.pressed = true
//         // console.log('Up Key: ', keys.up.pressed)
//         // level2.player.velocity.y -= 10
//         // break
//     }
//     switch (keyCode) {
//       case 83:
//         // console.log('down')
//         keys.down.pressed = true
//         break
//     }
//     switch (keyCode) {
//       case 68:
//         // console.log('right')
//         keys.right.pressed = true
//         break
//     }
//   })
//
//   addEventListener('keyup', ({ keyCode }) => {
//     // console.log(keyCode)
//     switch (keyCode) {
//       case 65:
//         // console.log('left')
//         keys.left.pressed = false
//         break
//     }
//     switch (keyCode) {
//       case 87:
//         // console.log('up')
//         keys.up.pressed = false
//         // level2.player.velocity.y += 5
//         break
//     }
//     switch (keyCode) {
//       case 83:
//         // console.log('down')
//         keys.down.pressed = false
//         break
//     }
//     switch (keyCode) {
//       case 68:
//         // console.log('right')
//         keys.right.pressed = false
//         break
//     }
//   })
// }
