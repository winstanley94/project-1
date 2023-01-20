input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . # . . .
        . . # . #
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        # . # . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . . . #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . . . # .
        . . . # #
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . # . .
        . . # # #
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # .
        . # . . #
        . # # # .
        . # . . .
        . . # # .
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        # # # . .
        # . . . .
        . # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . # . .
        # # . . .
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . #
        # . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . . #
        . . . . .
        . . . # #
        `)
    basic.showLeds(`
        . . . # #
        . . # . .
        . . . # #
        . . . . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . . # # .
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . # # . .
        # . . . .
        . # # . .
        . . . # .
        . # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        # # . . .
        . . # . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Stop")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C D C E F D G D ", 500)
})
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . # .
    . . . # .
    . . . # #
    . . . # .
    . . . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # . . #
    . # . . #
    . # # # #
    . # . . #
    . # . . #
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # . . #
    . # . . .
    # # . . .
    . # . . .
    . # . . #
    `)
basic.showLeds(`
    # . . # #
    # . . . #
    # . . . #
    # . . . #
    # . . # #
    `)
basic.showLeds(`
    . . # # #
    . . . # .
    . . . # .
    . . . # .
    . . # # #
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    # # # . .
    . # . . .
    . # . . .
    . # . . .
    # # # . .
    `)
basic.showLeds(`
    # # . . .
    # . . . .
    # . . . .
    # . . . .
    # # . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    . . . # .
    . . . # .
    . . . # #
    . . . # .
    . . . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # . . #
    . # . . #
    . # # # #
    . # . . #
    . # . . #
    `)
basic.showLeds(`
    # . . # .
    # . . # .
    # # # # .
    # . . # .
    # . . # .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # . . #
    . # . . .
    # # . . .
    . # . . .
    . # . . #
    `)
basic.showLeds(`
    # . . # #
    # . . . #
    # . . . #
    # . . . #
    # . . # #
    `)
basic.showLeds(`
    . . # # #
    . . . # .
    . . . # .
    . . . # .
    . . # # #
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    # # # . .
    . # . . .
    . # . . .
    . # . . .
    # # # . .
    `)
basic.showLeds(`
    # # . . .
    # . . . .
    # . . . .
    # . . . .
    # # . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
	
})
