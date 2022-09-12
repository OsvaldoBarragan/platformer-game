import { Background, Player, OtherObjects } from './../game-classes'
import { mainChar_front_image, r1_image, building1_image } from './../assign-images'

const canvas = document.getElementById('fullGame')

canvas.width = 500
canvas.height = 250

export const background = new Background({ image: r1_image })
export const player = new Player({ image: mainChar_front_image, x: 250, y: 125 })
export const otherObjects = [
    new OtherObjects({ image: building1_image, x: 100, y: 100 }),
]
