import { Background, Player, Building, Door, Water } from './../game-classes'
import { mainChar_front_image, r1_image, building1_image, door1_image, water_image } from './../assign-images'
import { world } from './../canvas'
world

export const background = new Background({ image: r1_image })
export const player = new Player({ image: mainChar_front_image, x: background.image.width / 2 - 19, y: 125 })
export const buildings = [
    new Building({ image: building1_image, x: 100, y: 100 }),
    new Building({ image: building1_image, x: 200, y: 200 }),
    new Building({ image: building1_image, x: 300, y: 300 })
]
export const doors = [
    new Door({ image: door1_image, x: 112.5, y: 150 })
]

export const water = [
    new Water({ image: water_image, x: 0, y: 64}),
    new Water({ image: water_image, x: 25, y: 64}),
    new Water({ image: water_image, x: 50, y: 64}),
    new Water({ image: water_image, x: 75, y: 64}),
    new Water({ image: water_image, x: 100, y: 64}),
    new Water({ image: water_image, x: 125, y: 64}),
    new Water({ image: water_image, x: 150, y: 64}),
    new Water({ image: water_image, x: 175, y: 64}),
    new Water({ image: water_image, x: 200, y: 64}),
    new Water({ image: water_image, x: 225, y: 64}),
    new Water({ image: water_image, x: 250, y: 64}),
    new Water({ image: water_image, x: 275, y: 64}),
    new Water({ image: water_image, x: 300, y: 64}),
    new Water({ image: water_image, x: 325, y: 64}),
    new Water({ image: water_image, x: 350, y: 64}),
    new Water({ image: water_image, x: 375, y: 64}),
    new Water({ image: water_image, x: 400, y: 64}),
]
