import { Background, Player, Building, Door, Water } from './../game-classes'
import { mainChar_front_image, r1_image, building1_image, door1_image, water_image } from './../assign-images'

export const background = new Background({ image: r1_image })
export const player = new Player({ image: mainChar_front_image, x: 250, y: 125 })
export const buildings = [
    new Building({ image: building1_image, x: 100, y: 100 }),
    new Building({ image: building1_image, x: 200, y: 200 }),
    new Building({ image: building1_image, x: 300, y: 300 })
]
export const doors = [
    new Door({ image: door1_image, x: 112.5, y: 150 })
]

export const water = [
    new Water({ image: water_image, x: 300, y: 64}),
    new Water({ image: water_image, x: 250, y: 64}),
    new Water({ image: water_image, x: 300, y: 100}),
    new Water({ image: water_image, x: 208, y: 64}),
]
