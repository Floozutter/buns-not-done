// title:   bun's not done!
// author:  Floozutter
// desc:    a game about a rabbit who comes back
// license: MIT License
// script:  js

import { printh } from "./helpers"

let t = 0
let x = 96
let y = 24

function BOOT() {
    printh("Module import works!")
}

function TIC() {
    if (btn(0)) y--
    if (btn(1)) y++
    if (btn(2)) x--
    if (btn(3)) x++
    cls(13)
    spr(1 + (((t % 60) / 30) | 0) * 2, x, y, 14, 3, 0, 0, 2, 2)
    print("HELLO WORLD!", 84, 84)
    t++
}
