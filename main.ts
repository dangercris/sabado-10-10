info.setScore(0)
info.setLife(3)
let Personaje = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Personaje.setPosition(19, 31)
let enemigo = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . f d d d d d d f . . . . . 
    . . . f d d b d b d f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . . f d b d f . . . . . . 
    . . . f f f d d f f d f . . . . 
    . . f d d d d d d d f . . . . . 
    . f d f f f d d f f . . . . . . 
    f d f . . f d f . . . . . . . . 
    . . . . . f d f . . . . . . . . 
    . . . . . f d f . . . . . . . . 
    . . . . f d d d f . . . . . . . 
    . . . f d f f f d f . . . . . . 
    . . f d f . . . f d f . . . . . 
    . f d f . . . . . f d f . . . . 
    `, SpriteKind.Enemy)
enemigo.setPosition(132, 89)
let comida = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Player)
comida.setPosition(136, 21)
