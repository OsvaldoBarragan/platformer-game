import { Background, Player } from './../game-classes'
import { mainChar_front_image, r1_image } from './../assign-images'

const canvas = document.getElementById('fullGame')

canvas.width = 300
canvas.height = 250

export const background = new Background({ image: r1_image })
export const player = new Player({ image: mainChar_front_image, x: 300, y: 200 })
