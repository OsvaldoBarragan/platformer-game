import { Background, Player, Door, Building } from './../../game-classes'
import { mainChar_front_image, floor2_image, door1_image, wall1_image } from './../../assign-images'
import { world } from './../../canvas'
import * as one from './one'
world

export const name = 'Main Office'
export const background = new Background({ image: floor2_image, x: 0, y: 0 })
export const player = new Player({ image: mainChar_front_image, x: 110, y: 10 })
export const buildings = [
    new Building({ image: wall1_image, x: 0, y: 0 }),
]
export const doors = [
    new Door({ image: door1_image, x: 120, y: 0, goIn: true, goesTo: one })
]
