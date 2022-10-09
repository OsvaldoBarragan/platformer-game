import { Background, Player, Door, Building } from './../../game-classes'
import { mainChar_front_image, floor3_image, door1_image, wall2_image, bed1_image } from './../../assign-images'
import { world } from './../../canvas'
import * as one from './one'
world

export const name = 'Apartment'
export const background = new Background({ image: floor3_image, x: 0, y: 0 })
export const player = new Player({ image: mainChar_front_image, x: 110, y: 10 })
export const buildings = [
    new Building({ image: wall2_image, x: 0, y: 0 }),
    new Building({ image: bed1_image, x: 0 , y: 80 }),
]
export const doors = [
    new Door({ image: door1_image, x: 100, y: 0, goIn: true, goesTo: one })
]
