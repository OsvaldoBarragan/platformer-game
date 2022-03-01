import { Background, Player, Building, Objects } from './../platformer-classes'
//
import { home1_image, character1_image, background2_image,
    wall1_image } from './../assign-images'

export const background = new Background({ image: background2_image })

export const player = new Player({ image: character1_image })

// will create the buildings
export const buildings = [
    new Building ({ image: home1_image, x: 200, y: 526 })
]

export const objects = [
    new Objects ({ image: wall1_image, x: 0, y: 0, climbable: false })
]
