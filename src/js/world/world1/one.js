import { Background, Player, Building, Door, Water } from './../../game-classes'
import { mainChar_front_image, r1_image, building1_image, door1_image, water_image } from './../../assign-images'
import { world } from './../../canvas'
import * as one_building1 from './one_building1'
import * as one_building2 from './one_building2'
world

export const name = 'World 1: Main Area'
export const background = new Background({ image: r1_image, x: 0, y: 0 })
export const player = new Player({ image: mainChar_front_image, x: 0, y: 200 })
export const buildings = [
    new Building({ image: building1_image, x: 100, y: 100 }),
    new Building({ image: building1_image, x: 100, y: 200 }),
    new Building({ image: building1_image, x: 100, y: 300 })
]
export const doors = [
    new Door({ image: door1_image, x: 112.5, y: 150, goIn: true, goesTo: one_building1 }),
    new Door({ image: door1_image, x: 112.5, y: 250, goIn: true, goesTo: one_building2 }),
    new Door({ image: door1_image, x: 112.5, y: 350, goIn: true, goesTo: one_building1 }),

]

export const water = [
    new Water({ image: water_image, x: 0, y: 0}),
    new Water({ image: water_image, x: 16, y: 0}),
    new Water({ image: water_image, x: 32, y: 0}),
    new Water({ image: water_image, x: 48, y: 0}),
    new Water({ image: water_image, x: 64, y: 0}),
    new Water({ image: water_image, x: 80, y: 0}),
    new Water({ image: water_image, x: 96, y: 0}),
    new Water({ image: water_image, x: 112, y: 0}),
    new Water({ image: water_image, x: 128, y: 0}),
    new Water({ image: water_image, x: 144, y: 0}),
    new Water({ image: water_image, x: 160, y: 0}),
    new Water({ image: water_image, x: 176, y: 0}),
    new Water({ image: water_image, x: 192, y: 0}),
    new Water({ image: water_image, x: 208, y: 0}),
    new Water({ image: water_image, x: 218, y: 0}),
    // new Water({ image: water_image, x: 240, y: 0}),
    new Water({ image: water_image, x: 0, y: 16}),
    new Water({ image: water_image, x: 16, y: 16}),
    new Water({ image: water_image, x: 32, y: 16}),
    new Water({ image: water_image, x: 48, y: 16}),
    new Water({ image: water_image, x: 64, y: 16}),
    new Water({ image: water_image, x: 80, y: 16}),
    new Water({ image: water_image, x: 96, y: 16}),
    new Water({ image: water_image, x: 112, y: 16}),
    new Water({ image: water_image, x: 128, y: 16}),
    new Water({ image: water_image, x: 144, y: 16}),
    new Water({ image: water_image, x: 160, y: 16}),
    new Water({ image: water_image, x: 176, y: 16}),
    new Water({ image: water_image, x: 192, y: 16}),
    new Water({ image: water_image, x: 208, y: 16}),
    new Water({ image: water_image, x: 218, y: 16}),
    // new Water({ image: water_image, x: 240, y: 16}),
    new Water({ image: water_image, x: 0, y: 32}),
    new Water({ image: water_image, x: 16, y: 32}),
    new Water({ image: water_image, x: 32, y: 32}),
    new Water({ image: water_image, x: 48, y: 32}),
    new Water({ image: water_image, x: 64, y: 32}),
    new Water({ image: water_image, x: 80, y: 32}),
    new Water({ image: water_image, x: 96, y: 32}),
    new Water({ image: water_image, x: 112, y: 32}),
    new Water({ image: water_image, x: 128, y: 32}),
    new Water({ image: water_image, x: 144, y: 32}),
    new Water({ image: water_image, x: 160, y: 32}),
    new Water({ image: water_image, x: 176, y: 32}),
    new Water({ image: water_image, x: 192, y: 32}),
    new Water({ image: water_image, x: 208, y: 32}),
    new Water({ image: water_image, x: 218, y: 32}),
    // new Water({ image: water_image, x: 240, y: 32}),
    new Water({ image: water_image, x: 0, y: 48}),
    new Water({ image: water_image, x: 16, y: 48}),
    new Water({ image: water_image, x: 32, y: 48}),
    new Water({ image: water_image, x: 48, y: 48}),
    new Water({ image: water_image, x: 64, y: 48}),
    new Water({ image: water_image, x: 80, y: 48}),
    new Water({ image: water_image, x: 96, y: 48}),
    new Water({ image: water_image, x: 112, y: 48}),
    new Water({ image: water_image, x: 128, y: 48}),
    new Water({ image: water_image, x: 144, y: 48}),
    new Water({ image: water_image, x: 160, y: 48}),
    new Water({ image: water_image, x: 176, y: 48}),
    new Water({ image: water_image, x: 192, y: 48}),
    new Water({ image: water_image, x: 208, y: 48}),
    new Water({ image: water_image, x: 218, y: 48}),
    // new Water({ image: water_image, x: 240, y: 48}),
]
