enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Personaje.vy == 0) {
        Personaje.vy = -200
    }
    animation.runImageAnimation(
    Personaje,
    [img`
        . . . . . e e e e . . . . . . . 
        . . . . e d e e e . . . . . . . 
        . . . . e f d f . . . . . . . . 
        . . . . . d d d . . . . . . . . 
        . . . . . . d . . . . . . e . . 
        . . . . 7 7 d 7 7 . . . . . e . 
        . . . 7 . 7 7 7 . 7 . . . e . . 
        . . 7 . . 5 5 5 . . 7 . e . . . 
        . . . d . 7 7 7 . . . d . . . . 
        . . . . . f f f . . e . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . 6 . . 6 . . . . . . . . . 
        . . . . 6 . . 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . e e e e . . . . . . . 
        . . . . e d e e e . . . . . . . 
        . . . . e f d f . . . . . . . . 
        . . . . . d d d . . . . e . . . 
        . . . . . . d . . . . . . e . . 
        . . . 7 7 7 d 7 7 . . . e . . . 
        . . 7 . . 7 7 7 . 7 . e . . . . 
        . d . . . 5 5 5 . . d . . . . . 
        . . . . . 7 7 7 . e . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f . 6 . . . . . . . . 
        . . . . 6 . . . 6 . . . . . . . 
        . . . . . 6 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
    scene.cameraFollowSprite(Personaje)
})
let Personaje: Sprite = null
let comida = 0
let enemigo = 0
info.setScore(0)
info.setLife(3)
Personaje = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e e d e e d e . . e . . 
    . . . . e d f d f d . . . e . . 
    . . . . e d d d d d . . e . . . 
    . . . . . . . d . . . . e . . . 
    . . . . . 7 7 7 7 7 7 7 d . . . 
    . . . . 7 . 7 7 7 . . . e . . . 
    . . . . 7 . 5 5 5 . . . e . . . 
    . . . . 7 . 7 7 7 . . . e . . . 
    . . . . d . 7 7 7 . . . e . . . 
    . . . . . . f f f . . . e . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . 6 . 6 . . . . . . . 
    . . . . . 6 6 . 6 6 . . . . . . 
    `, SpriteKind.Player)
Personaje.setPosition(27, 105)
effects.starField.startScreenEffect()
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level_0`)
controller.moveSprite(Personaje, 100, 0)
Personaje.setVelocity(50, 50)
Personaje.ay = 350
