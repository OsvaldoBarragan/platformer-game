'use strict'
import * as one from './world/one'
import { mainChar_front_image, mainChar_back_image, mainChar_left_image, mainChar_right_image } from './assign-images'

export const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')
const canvas2 = document.getElementById('sideInfo')
const c2 = canvas2.getContext('2d')

canvas.width = 1000
canvas.height = 500
canvas2.width = 300
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
    }
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    world.background.update()
    world.buildings.forEach(building => {
        building.draw()
    })
    world.doors.forEach(door => {
        door.draw()
    })
    world.water.forEach(water => {
        water.update()
    })
    world.player.update()
}
function animateInfo() {
    requestAnimationFrame(animateInfo)
    c2.fillStyle = 'white'
    c2.fillRect(0, 0, canvas2.width, canvas2.height)
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
        userKeys.s_Key.pressed = false
        userKeys.a_Key.pressed = false
        userKeys.d_Key.pressed = false
        world.player.image = mainChar_back_image
        world.player.totalFrames = 3
        world.player.velocity.y = -2
        break
    }
    switch (keyCode) {
    case 83:
        userKeys.s_Key.pressed = true
        userKeys.w_Key.pressed = false
        userKeys.a_Key.pressed = false
        userKeys.d_Key.pressed = false
        world.player.image = mainChar_front_image
        world.player.totalFrames = 3
        world.player.velocity.y = 2
        break
    }
    switch (keyCode) {
    case 65:
        userKeys.a_Key.pressed = true
        userKeys.d_Key.pressed = false
        userKeys.w_Key.pressed = false
        userKeys.s_Key.pressed = false
        world.player.image = mainChar_left_image
        world.player.totalFrames = 3
        world.player.velocity.x = -2
        break
    }
    switch (keyCode) {
    case 68:
        userKeys.d_Key.pressed = true
        userKeys.a_Key.pressed = false
        userKeys.s_Key.pressed = false
        userKeys.w_Key.pressed = false
        world.player.image = mainChar_right_image
        world.player.totalFrames = 3
        world.player.velocity.x = 2
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
})
