input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playMelody("E B C5 A B G A F ", 120)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        # # # # #
        # # . # #
        # # . # #
        `)
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Double))
    music.playTone(247, music.beat(BeatFraction.Double))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hallo!")
    music.playMelody("G B A G C5 B A B ", 120)
})
