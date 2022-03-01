import { Background, Player, Building, Objects } from './../platformer-classes'

import { building1_image, building2_image, building3_image,
    home1_image, character3_image, background3_image, ladder1_image,
    wall1_image } from './../assign-images'

export const background = new Background({ image: background3_image })

export const player = new Player({ image: character3_image })

export const buildings = [new Building ({ image: building1_image, x: 500, y: 476 }),
    new Building ({ image: building2_image, x: 600, y: 396 }),
    new Building ({ image: building3_image, x: 800, y: 476 }),
    new Building ({ image: home1_image, x: 200, y: 526 })]

export const objects = [new Objects ({ image: ladder1_image, x: 600, y: 476, climbable: true }),
    new Objects ({ image: ladder1_image, x: 600, y: 376, climbable: true }),
    new Objects ({ image: wall1_image, x: 0, y: 0, climbable: false })]
