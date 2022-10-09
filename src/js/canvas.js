'use strict'
import * as one from './world/world1/one'
import { mainChar_front_image, mainChar_back_image, mainChar_left_image, mainChar_right_image } from './assign-images'

export const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')
const canvas2 = document.getElementById('sideInfo')
const c2 = canvas2.getContext('2d')

canvas.width = 500
canvas.height = 500
canvas2.width = 500
canvas2.height = 150

export let world = one

export const userKeys = {
    w_Key: { // go up
        pressed: false
    },
    s_Key: { // go down
        pressed: false
    },
    a_Key: { // go left
        pressed: false
    },
    d_Key: { // go right
        pressed: false
    },
    space_Key: { // performs action
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    world.background.update()
    if (world.buildings !== undefined) {
        world.buildings.forEach(building => {
            building.draw()
        })
    }
    if (world.doors !== undefined) {
        world.doors.forEach(door => {
            door.draw()
        })
    }
    if (world.water !== undefined) {
        world.water.forEach(water => {
            water.update()
        })
    }
    world.player.update()
    // console.log(world.background.position.y)
}
function animateInfo() {
    requestAnimationFrame(animateInfo)
    c2.fillStyle = 'white'
    c2.fillRect(0, 0, canvas2.width, canvas2.height)
    const info = () => {
        world.doors.forEach(door => {
            const player = world.player
            if (player.position.x + player.spriteWidth >= door.position.x &&
              player.position.x <= door.position.x + door.image.width &&
              player.position.y <= door.position.y + door.image.height &&
              player.position.y + player.spriteHeight >= door.position.y) {
                c2.font = '20px Georgia'
                c2.fillStyle = 'black'
                c2.fillText('Click Space to Enter ' + door.goesTo.name, 0, 20)
                // c2.fillText(door.goesTo.name, 0, 40)
            }
        })
    }
    info()
}

// let numOfImages = 1
// function loadImages () {
//     if (--numOfImages > 0) return
//     animate()
// }
// loadImages()
animate()
animateInfo()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
    case 87:
        userKeys.w_Key.pressed = true
        world.player.image = mainChar_back_image
        world.player.totalFrames = 3
        world.player.velocity.y = -1.5
        break
    }
    switch (keyCode) {
    case 83:
        userKeys.s_Key.pressed = true
        world.player.image = mainChar_front_image
        world.player.totalFrames = 3
        world.player.velocity.y = 1.5
        break
    }
    switch (keyCode) {
    case 65:
        userKeys.a_Key.pressed = true
        world.player.image = mainChar_left_image
        world.player.totalFrames = 3
        world.player.velocity.x = -1.5
        break
    }
    switch (keyCode) {
    case 68:
        userKeys.d_Key.pressed = true
        world.player.image = mainChar_right_image
        world.player.totalFrames = 3
        world.player.velocity.x = 1.5
        break
    }
})

addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
    case 87:
        userKeys.w_Key.pressed = false
        world.player.totalFrames = 1
        world.player.velocity.y = 0
        break
    }
    switch (keyCode) {
    case 83:
        userKeys.s_Key.pressed = false
        world.player.totalFrames = 1
        world.player.velocity.y = 0
        break
    }
    switch (keyCode) {
    case 65:
        userKeys.a_Key.pressed = false
        world.player.totalFrames = 1
        world.player.velocity.x = 0
        break
    }
    switch (keyCode) {
    case 68:
        userKeys.d_Key.pressed = false
        world.player.totalFrames = 1
        world.player.velocity.x = 0
        break
    }
    switch (keyCode) {
    case 32:
        userKeys.space_Key.pressed = true
        world.doors.forEach(door => {
            const player = world.player
            if (player.position.x + player.spriteWidth >= door.position.x &&
              player.position.x <= door.position.x + door.image.width &&
              player.position.y <= door.position.y + door.image.height &&
              player.position.y + player.spriteHeight >= door.position.y) {
                if (userKeys.space_Key.pressed === true) {
                    world = door.goesTo
                }
            }
        })
        userKeys.space_Key.pressed = false
        break
    }
})
