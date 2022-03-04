import { Background, Player, Building, Objects, MoveToNextRound } from './../platformer-classes'

import { building1_image, building2_image, building3_image,
    building4_image, home1_image, character1_image, background3_image,
    ladder1_image, wall1_image, finish1_image } from './../assign-images'

export const id = 1

export const background = new Background({ image: background3_image })

export const player = new Player({ image: character1_image })

export const buildings = [
    new Building ({ image: building1_image, x: 500, y: 476 }),
    new Building ({ image: building2_image, x: 600, y: 396 }),
    new Building ({ image: building3_image, x: 800, y: 476 }),
    new Building ({ image: building4_image, x: 300, y: 190 }),
    new Building ({ image: home1_image, x: 200, y: 526 })]

export const objects = [
    new Objects ({ image: ladder1_image, x: 600, y: 476, climbable: true }),
    new Objects ({ image: wall1_image, x: 0, y: 0, climbable: false, limitationWall: true}),
    new Objects ({ image: ladder1_image, x: 750, y: 430, climbable: true })

]

export const moveToNextRound = new MoveToNextRound ({ image: finish1_image, x: 693, y: 526 })
