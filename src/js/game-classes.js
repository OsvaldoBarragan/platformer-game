import { world, userKeys } from './canvas'
const canvas = document.getElementById('fullGame')
const c = canvas.getContext('2d')

// function createImage(imageSrc) {
//     const image = new Image()
//     image.src = imageSrc
//     return image
// }

canvas.width = 500
canvas.height = 500

world

userKeys
export let inWater = false

// building class
export class Background {
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
    update() {
        this.draw()
        if (world.player.position.y + world.player.spriteHeight >= world.background.position.y + world.background.image.height) {
            world.player.position.y = world.background.position.y + world.background.image.height - world.player.spriteHeight
        }
        if (world.player.position.y <= world.background.position.y) {
            world.player.position.y = world.background.position.y
        }
        if (world.player.position.x + world.player.spriteWidth >= world.background.position.x + world.background.image.width) {
            world.player.position.x = world.background.position.x + world.background.image.width - world.player.spriteWidth
        }
        if (world.player.position.x <= world.background.position.x) {
            world.player.position.x = world.background.position.x
        }
        // // scroll background down if player moves up
        // if (world.player.position.y + world.player.velocity.y <= 0) {
        //     if (world.background.position.y >= 0) {
        //         world.player.position.y = 0
        //     }
        //     else {
        //         if (userKeys.w_Key.pressed === true) {
        //             world.background.position.y += 1
        //             world.buildings.forEach(building => {
        //                 building.position.y += 1
        //             })
        //             world.doors.forEach(door => {
        //                 door.position.y += 1
        //             })
        //             world.water.forEach(water => {
        //                 water.position.y += 1
        //             })
        //         }
        //         world.player.position.y = 0
        //         // world.background.position.y += 1
        //     }
        // }
        // // scroll background to the left if player moves right
        // if (world.player.position.x >= canvas.width - world.player.spriteWidth) {
        //     if (world.background.position.x <= -world.background.image.width + canvas.width) {
        //         world.player.position.x = canvas.width - world.player.spriteWidth
        //         world.player.velocity.x = 0
        //         console.log('Stop')
        //     }
        //     else {
        //         if (userKeys.d_Key.pressed === true) {
        //             world.background.position.x -= 1
        //             world.buildings.forEach(building => {
        //                 building.position.x -= 1
        //             })
        //             world.doors.forEach(door => {
        //                 door.position.x -= 1
        //             })
        //             world.water.forEach(water => {
        //                 water.position.x -= 1
        //             })
        //         }
        //         world.player.position.x = canvas.width - world.player.spriteWidth
        //     }
        // }
        // // scroll background to the right if player moves left
        // if (world.player.position.x <= 0) {
        //     if (world.background.position.x >= 0) {
        //         world.player.position.x = 0
        //         world.player.velocity.x = 0
        //     }
        //     else {
        //         if (userKeys.a_Key.pressed === true) {
        //             world.background.position.x += 1
        //             world.buildings.forEach(building => {
        //                 building.position.x += 1
        //             })
        //             world.doors.forEach(door => {
        //                 door.position.x += 1
        //             })
        //             world.water.forEach(water => {
        //                 water.position.x += 1
        //             })
        //         }
        //         world.player.position.x = 0
        //     }
        // }
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
        this.inWaterHeight = this.image.height / 2
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
        if (inWater === false) {
            this.spriteHeight = this.image.height
        }
        // scroll background up if player moves down
        if (world.player.position.y + world.player.spriteHeight >= canvas.height) {
            if (world.background.position.y <= -world.background.image.height + canvas.height) {
                world.player.position.y = canvas.height - world.player.spriteHeight
            }
            else {
                if (userKeys.s_Key.pressed === true) {
                    world.background.position.y -= 2
                    world.buildings.forEach(building => {
                        building.position.y -= 2
                    })
                    world.doors.forEach(door => {
                        door.position.y -= 2
                    })
                    world.water.forEach(water => {
                        water.position.y -= 2
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
                    world.background.position.y += 2
                    world.buildings.forEach(building => {
                        building.position.y += 2
                    })
                    world.doors.forEach(door => {
                        door.position.y += 2
                    })
                    world.water.forEach(water => {
                        water.position.y += 2
                    })
                }
                world.player.position.y = 0
                // world.background.position.y += 1
            }
        }
        // scroll background to the left if player moves right
        if (world.player.position.x >= canvas.width - world.player.spriteWidth) {
            if (world.background.position.x <= -world.background.image.width + canvas.width) {
                world.player.position.x = canvas.width - world.player.spriteWidth
                world.player.velocity.x = 0
            }
            else {
                if (userKeys.d_Key.pressed === true) {
                    world.background.position.x -= 2
                    world.buildings.forEach(building => {
                        building.position.x -= 2
                    })
                    world.doors.forEach(door => {
                        door.position.x -= 2
                    })
                    world.water.forEach(water => {
                        water.position.x -= 2
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
                    world.background.position.x += 2
                    world.buildings.forEach(building => {
                        building.position.x += 2
                    })
                    world.doors.forEach(door => {
                        door.position.x += 2
                    })
                    world.water.forEach(water => {
                        water.position.x += 2
                    })
                }
                world.player.position.x = 0
            }
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
        // Building Conditions
        world.buildings.forEach(building => {

            const player = world.player

            if (player.position.x + player.spriteWidth >= building.position.x &&
                player.position.x <= building.position.x + building.image.width &&
                player.position.y + player.spriteHeight <= building.position.y &&
                player.position.y + player.spriteHeight + player.velocity.y >= building.position.y) {
                player.velocity.y = 0
                player.position.y = building.position.y - player.spriteHeight
            }
            if (player.position.x + player.spriteWidth >= building.position.x &&
                player.position.x <= building.position.x + building.image.width &&
                player.position.y >= building.position.y + building.image.height - player.spriteHeight &&
                player.position.y + player.velocity.y <= building.position.y + building.image.height - player.spriteHeight) {
                player.velocity.y = 0
                player.position.y = building.position.y + building.image.height - player.spriteHeight
            }
            if (player.position.x + player.spriteWidth <= building.position.x &&
                player.position.x + player.spriteWidth + player.velocity.x >= building.position.x &&
                player.position.y + player.spriteHeight >= building.position.y &&
                player.position.y < building.position.y + building.image.height - player.spriteHeight) {
                player.velocity.x = 0
                player.position.x = building.position.x - player.spriteWidth
            }
            if (player.position.x >= building.position.x + building.image.width &&
                player.position.x + player.velocity.x <= building.position.x + building.image.width &&
                player.position.y + player.spriteHeight >= building.position.y &&
                player.position.y < building.position.y + building.image.height - player.spriteHeight) {
                player.velocity.x = 0
                player.position.x = building.position.x + building.image.width
            }
        })
    }
}

export class Door {
    constructor({ image, x, y, goIn, goesTo }) {
        this.position = {
            x: x,
            y: y
        }
        this.image = image
        this.goIn = goIn
        this.goesTo = goesTo

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
        // Water Conditions
        world.water.forEach(water => {
            const player = world.player

            if (player.position.x + 5 >= water.position.x &&
                player.position.x + player.spriteWidth - 5 <= water.position.x + water.spriteWidth &&
                player.position.y + (player.spriteHeight / 2) >= water.position.y &&
                player.position.y + player.spriteHeight <= water.position.y + water.spriteHeight) {
                inWater = true
                player.spriteHeight = player.inWaterHeight

                if (userKeys.w_Key.pressed === true) { player.velocity.y = -0.5 }
                if (userKeys.s_Key.pressed === true) { player.velocity.y = 0.5 }
                if (userKeys.a_Key.pressed === true) { player.velocity.x = -0.5 }
                if (userKeys.d_Key.pressed === true) { player.velocity.x = 0.5 }
            }
            else {
                inWater = false
            }
        })
    }
}
