import * as one from './world/one'
import { mainChar_front_image, mainChar_back_image, mainChar_left_image, mainChar_right_image } from './assign-images'

const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')

canvas.width = 1000
canvas.height = 500

let world = one

const userKeys = {
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
    world.player.update()
    world.otherObjects.forEach(obj => {
        obj.draw()
    })
    // Other Objects Conditions
    world.otherObjects.forEach(obj => {
        const player = world.player
        if (player.position.x + player.spriteWidth + player.velocity.x >= obj.position.x &&
        player.position.x <= obj.position.x + obj.image.width &&
        player.position.y + player.spriteHeight >= obj.position.y &&
        player.position.y <= obj.position.y + obj.image.height) {
            if (userKeys.d_Key.pressed === true) { player.position.x = obj.position.x - player.spriteWidth }
        }

        if (player.position.x + player.velocity.x <= obj.position.x + obj.image.width &&
        player.position.x + player.spriteWidth >= obj.position.x &&
        player.position.y + player.spriteHeight >= obj.position.y &&
        player.position.y <= obj.position.y + obj.image.height) {
            if (userKeys.a_Key.pressed === true) { player.position.x = obj.position.x + obj.image.width }
        }

        if (player.position.y + player.spriteHeight + player.velocity.y >= obj.position.y &&
        player.position.y <= obj.position.y + obj.image.height &&
        player.position.x + player.spriteWidth >= obj.position.x &&
        player.position.x <= obj.position.x + obj.image.width) {
            if (userKeys.s_Key.pressed === true) { player.position.y = obj.position.y - player.spriteHeight }
        }
    })

    // scroll background up if player moves down
    if (world.player.position.y + world.player.spriteHeight >= canvas.height) {
        if (world.background.position.y <= -250) {
            world.player.position.y = canvas.height - world.player.spriteHeight
        }
        else {
            if (userKeys.s_Key.pressed === true) { world.background.position.y -= 1 }
            world.player.position.y = canvas.height - world.player.spriteHeight
        }
    }
    // scroll background down if player moves up
    if (world.player.position.y + world.player.velocity.y <= 0) {
        if (world.background.position.y >= 0) {
            world.player.position.y = 0
        }
        else {
            if (userKeys.w_Key.pressed === true) { world.background.position.y += 1 }
            world.player.position.y = 0
            // world.background.position.y += 1
        }
    }
    // scroll background to the left if player moves right
    if (world.player.position.x >= canvas.width - world.player.spriteWidth) {
        if (world.background.position.x <= -500) {
            world.player.position.x = canvas.width - world.player.spriteWidth
            world.player.velocity.x = 0
        }
        else {
            if (userKeys.d_Key.pressed === true) { world.background.position.x -= 1 }
            world.player.position.x = canvas.width - world.player.spriteWidth
        }
    }
    // scroll background to the right if player moves left
    if (world.player.position.x <= 0) {
        if (world.background.position.x >= 0) {
            world.player.position.x = 0
            world.player.velocity.x = 0
        }
        else {
            if (userKeys.a_Key.pressed === true) { world.background.position.x += 1 }
            world.player.position.x = 0
        }
    }
}
let numOfImages = 1
function loadImages () {
    if (--numOfImages > 0) return
    animate()
}
loadImages()
// animate()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
    case 87:
        userKeys.w_Key.pressed = true
        world.player.image = mainChar_back_image
        world.player.totalFrames = 3
        world.player.velocity.y = -2
        break
    }
    switch (keyCode) {
    case 83:
        userKeys.s_Key.pressed = true
        world.player.image = mainChar_front_image
        world.player.totalFrames = 3
        world.player.velocity.y = 2
        break
    }
    switch (keyCode) {
    case 65:
        userKeys.a_Key.pressed = true
        world.player.image = mainChar_left_image
        world.player.totalFrames = 3
        world.player.velocity.x = -2
        break
    }
    switch (keyCode) {
    case 68:
        userKeys.d_Key.pressed = true
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
