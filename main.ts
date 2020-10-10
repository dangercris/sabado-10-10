info.setScore(0)
info.setLife(3)
let Personaje = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e d e e d e . . e . . 
    . . . . e d f d f d . . . e . . 
    . . . . e d d d d d . . e . . . 
    . . . . . . . d . . . . e . . . 
    . . . . . 7 7 7 7 7 7 7 d . . . 
    . . . . 7 . 7 7 7 . . . e . . . 
    . . . . 7 . 5 5 5 . . . e . . . 
    . . . . 7 . 7 7 7 . . . e . . . 
    . 6 . . d . 7 7 7 . . . e . . . 
    . . 6 . . . f f f . . . e . . . 
    . f 9 f . . f . f . . . . . . . 
    . 9 9 9 . . 6 . 6 . . . . . . . 
    . 9 . 9 . 6 6 . 6 6 . . . . . . 
    `, SpriteKind.Player)
Personaje.setPosition(79, 84)
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
enemigo.setPosition(135, 86)
let comida = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Player)
comida.setPosition(149, 87)
effects.starField.startScreenEffect()
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    .............ccccc.....................................................................................................................ccccc....ccccc...........
    .............ccccc.....................................................................................................................ccccc....ccccc...........
    .............ccccc......................................................ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555cccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555555555555555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc5555555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc555555555
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55555
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaa
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaa
    aaacccccaaacccccccccaaccccccccaaacccccccccccccccccccccccccccccccccaaaaccccaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    33aaaaaaaaaaaaaaaaaaaaaa333333333333333333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa33333333333aaaaaaaaaaaaaaaaaaaaaaaaa333333333333333333333333333333333333333aaaaaaaa
    333333333333333333333333333333333333333333333333311aaaaaaaaaaaa3333333333333333333333333333333aaaaaaaaa33333333333333333333333333333333333333333333333333333333a
    3333333333333333333333333333333333333333333333333111111111111113333333333333333333333333333333111111111333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333111111111111113333333333333333333333333333333111111111333333333333333333388888333333333333333333333333333333333
    8888888888888888888888333333333333333333333333333111111111111111111133333333333333333333333111111111111111111111133333333388888333333333333333333333333333333333
    8888888888888888888888888888888888888888888883333311111111111111111133333333333333333333333111111111111111111111111133333388888333333333333333333333333333333333
    8888888888888888888888888888888888888888888888.33311111111111111111133333333333333333333333333111111111111111111111133333888888333333333333333333333333333333333
    8888888888888888888888888888888888888888888888888888811111111111111111333333333333333333333333111111111111111111111118888888888888888888888888888888888888888888
    9999999999999888888888888888888888888888888888888888888111111111111113333388888888888883333333111111111111111111111118888888888888888888888888888888888888888888
    9999999999999999988888888888888888888888888888888888888888888888888888888888888888888888883333111111111111111111111118888888888888888888888888888888888888888888
    9999999999999999999999888888888888888999998888888888888888888888888888888888888888888888888888888888888881111111111118888888888888888888888888888999999999999999
    9999999999999999999999988888888888888999999999888888888888888888888888888888888888888888888888888888888888888888888118888888888888899999999999999999999999999999
    9999999999999999999999999999999999999999999999999888888888888888888888888888888899998888888888888888888888888888888888888888888999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999998888888888888888888888888999999988888888888888888888888888888888888888889999999999999999999999999777777777
    9999999999999999999999999999999999999999999999999999999988888888888888888999999999999988888888888888888888888888888888888888899999999999999999999999997777888877
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999899999999999999999999888888888877777
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988888eeeeeeeeeee
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999eeeeeeeeee
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988899999eeeeeeee
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988999999999999e
    9999999999999999999999999955599999599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999
    9999999999999999999999fff555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999
    9999999999999999999999f5ffff555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    999999999999999999999955555ffff555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999999555555555ffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999995555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999
    9999999999999999999995555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999
    999999999999999999999ffffffffffffff55555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999995555555555555ffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999995555555555555555555555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999995555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999995555555555555555555555555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999888999999999999
    9999999999999999999995555544444444444445555555449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999
    9999999999999999999994444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999889999999999999
    9999999999999999999994444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444449944444449999944444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444449944444449999944444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444449444444449999944444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    99999999999999999999944444444444444499944eeeee449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444444444444444444eeeeee449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998889999999999999
    9999999999999999999994444444444444444444eeeeee449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998899999999999999
    9999999999999999999994444444444444444444efeeee449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988999999999999999
    9999999999999999999994444444444444444444eeeeee449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999988999999999999999
    9999999999999999999994444444444444444444eeeeee449999999999999999999999999999999999999999999999999999999999999999999999999977799999999999999998888999999999999977
    9999999999999999999994444444444444444444eeeee4449999997777777999999999999999999999999999999999999999999999999999999999977777777799999999999997777777779999999977
    9999777777777777777774444444444447777777777777999999997777777777777777777777777777777777777799999777999999997777777777777777777777777777777777777777779999999977
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999997777777777777777777777777777777777777777779999999977
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999997777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777eeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777eeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777777777777777777777777777
    77eeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777e77777777777777777777777777eee777777777777777777777777777eeeeeee7777777777777777777777777ee777777777777777e
    eeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeee77777777777eeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
