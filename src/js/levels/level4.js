import { Background, Player, Building, Objects, MoveToNextRound } from './../platformer-classes'
//
import { home1_image, character1_image, background4_image,
    wall1_image, finish1_image } from './../assign-images'

export const id = 4

export const background = new Background({ image: background4_image })

export const player = new Player({ image: character1_image })

// will create the buildings
export const buildings = [
    new Building ({ image: home1_image, x: 200, y: 526 }),
    new Building ({ image: home1_image, x: 300, y: 400 })
]

export const objects = [
    new Objects ({ image: wall1_image, x: 0, y: 0, climbable: false, limitationWall: true })
]

export const moveToNextRound = new MoveToNextRound ({ image: finish1_image, x: 20, y: 526 })
