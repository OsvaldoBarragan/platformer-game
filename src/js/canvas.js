'use strict'
import * as one from './world/one'
import { mainChar_front_image, mainChar_back_image, mainChar_left_image, mainChar_right_image } from './assign-images'

const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')
// const canvas2 = document.getElementById('sideInfo')
// const c2 = canvas2.getContext('2d')

canvas.width = 1000
canvas.height = 500
// canvas2.width = 300
// canvas2.height = 150

export let world = one
export let topCollision = false
let bottomCollision = false
let leftCollision = false
let rightCollision = false
export let inWater = false

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
    // console.log(topCollision)

    // Building Conditions
    world.buildings.forEach(building => {

        const player = world.player
        // prevent from going down
        if (player.position.x + player.spriteWidth >= building.position.x &&
            player.position.x <= building.position.x + building.image.width &&
            player.position.y + player.spriteHeight <= building.position.y &&
            player.position.y + player.spriteHeight + player.velocity.y >= building.position.y) {
            topCollision = true
            player.velocity.y = 0
            player.position.y = building.position.y - player.spriteHeight
            console.log(topCollision)
        }
        else {
            topCollision = false
        }
        // if (player.position.x + player.spriteWidth >= building.position.x &&
        //     player.position.x <= building.position.x + building.image.width &&
        //     player.position.y >= building.position.y + building.image.height - player.spriteHeight &&
        //     player.position.y + player.velocity.y <= building.position.y + building.image.height - player.spriteHeight) {
        //     bottomCollision = true
        //     player.velocity.y = 0
        //     player.position.y = building.position.y + building.image.height - player.spriteHeight
        // }
        // else {
        //     bottomCollision = false
        // }

        // if (player.position.x + player.spriteWidth >= building.position.x &&
        //     player.position.x <= building.position.x + building.image.width &&
        //     player.position.y >= building.position.y + building.image.height - player.spriteHeight &&
        //     player.position.y + player.velocity.y <= building.position.y + building.image.height - player.spriteHeight) {
        //     bottomCollision = true
        //     player.velocity.y = 0
        //     player.position.y = building.position.y + building.image.height - player.spriteHeight
        // }
        // else {
        //     bottomCollision = false
        // }
        //
        // if (player.position.y + player.spriteHeight >= building.position.y &&
        //     player.position.y <= building.position.y + building.image.height - player.spriteHeight - 1 &&
        //     player.position.x + player.spriteWidth <= building.position.x &&
        //     player.position.x + player.spriteWidth + player.velocity.x >= building.position.x) {
        //     leftCollision = true
        //     player.velocity.x = 0
        //     player.position.x = building.position.x - player.spriteWidth
        // }
        // else {
        //     leftCollision = false
        // }
        //
        // if (player.position.y + player.spriteHeight >= building.position.y &&
        //     player.position.y <= building.position.y + building.image.height - player.spriteHeight - 1 &&
        //     player.position.x >= building.position.x + building.image.width &&
        //     player.position.x + player.velocity.x <= building.position.x + building.image.width) {
        //     rightCollision = true
        //     player.velocity.x = 0
        //     player.position.x = building.position.x + building.image.width
        // }
        // else {
        //     rightCollision = false
        // }
    })

    // if (inWater === true) {
    //     world.player.spriteHeight = world.player.image.height / 1.5
    // }
    // if (inWater === false) {
    //     world.player.spriteHeight = world.player.image.height
    // }

    // Water Conditions
    world.water.forEach(water => {
        const player = world.player

        if (player.position.x + 5 >= water.position.x &&
            player.position.x + player.spriteWidth - 5 <= water.position.x + water.spriteWidth &&
            player.position.y + (player.spriteHeight / 1.5) >= water.position.y &&
            player.position.y + player.spriteHeight <= water.position.y + water.spriteHeight) {
            inWater = true
            console.log(inWater)
        }
        else {
            inWater = false
        }
    })


    // scroll background up if player moves down
    if (world.player.position.y + world.player.spriteHeight >= canvas.height) {
        if (world.background.position.y <= -250) {
            world.player.position.y = canvas.height - world.player.spriteHeight
        }
        else {
            if (userKeys.s_Key.pressed === true) {
                world.background.position.y -= 1
                world.buildings.forEach(building => {
                    building.position.y -= 1
                })
                world.doors.forEach(door => {
                    door.position.y -= 1
                })
                world.water.forEach(water => {
                    water.position.y -= 1
                })
            }
            world.player.position.y = canvas.height - world.player.spriteHeight
        }
    }
    // scroll background down if player moves up
    if (world.player.position.y + world.player.velocity.y <= 0) {
        if (world.background.position.y >= 0) {
            world.player.position.y = 0
        }
        else {
            if (userKeys.w_Key.pressed === true) {
                world.background.position.y += 1
                world.buildings.forEach(building => {
                    building.position.y += 1
                })
                world.doors.forEach(door => {
                    door.position.y += 1
                })
                world.water.forEach(water => {
                    water.position.y += 1
                })
            }
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
            if (userKeys.d_Key.pressed === true) {
                world.background.position.x -= 1
                world.buildings.forEach(building => {
                    building.position.x -= 1
                })
                world.doors.forEach(door => {
                    door.position.x -= 1
                })
                world.water.forEach(water => {
                    water.position.x -= 1
                })
            }
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
            if (userKeys.a_Key.pressed === true) {
                world.background.position.x += 1
                world.buildings.forEach(building => {
                    building.position.x += 1
                })
                world.doors.forEach(door => {
                    door.position.x += 1
                })
                world.water.forEach(water => {
                    water.position.x += 1
                })
            }
            world.player.position.x = 0
        }
    }
}
// function animateInfo() {
//     requestAnimationFrame(animateInfo)
//     c2.fillStyle = 'white'
//     c2.fillRect(0, 0, canvas2.width, canvas2.height)
// }

// let numOfImages = 1
// function loadImages () {
//     if (--numOfImages > 0) return
//     animate()
// }
// loadImages()
animate()
// animateInfo()

addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
    case 87:
        userKeys.w_Key.pressed = true
        userKeys.s_Key.pressed = false
        userKeys.a_Key.pressed = false
        userKeys.d_Key.pressed = false
        world.player.image = mainChar_back_image
        world.player.totalFrames = 3
        if (bottomCollision === true) {
            break
        }
        if (bottomCollision === false) {
            world.player.velocity.y = -2
            break
        }
    }
    switch (keyCode) {
    case 83:
        userKeys.s_Key.pressed = true
        userKeys.w_Key.pressed = false
        userKeys.a_Key.pressed = false
        userKeys.d_Key.pressed = false
        world.player.image = mainChar_front_image
        world.player.totalFrames = 3
        if (topCollision === true) {
            break
        }
        if (topCollision === false) {
            world.player.velocity.y = 2
            break
        }
    }
    switch (keyCode) {
    case 65:
        userKeys.a_Key.pressed = true
        userKeys.d_Key.pressed = false
        userKeys.w_Key.pressed = false
        userKeys.s_Key.pressed = false
        world.player.image = mainChar_left_image
        world.player.totalFrames = 3
        if (rightCollision === true) {
            break
        }
        if (rightCollision === false) {
            world.player.velocity.x = -2
            break
        }
    }
    switch (keyCode) {
    case 68:
        userKeys.d_Key.pressed = true
        userKeys.a_Key.pressed = false
        userKeys.s_Key.pressed = false
        userKeys.w_Key.pressed = false
        world.player.image = mainChar_right_image
        world.player.totalFrames = 3
        if (leftCollision === true) {
            break
        }
        if (leftCollision === false) {
            world.player.velocity.x = 2
            break
        }
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
