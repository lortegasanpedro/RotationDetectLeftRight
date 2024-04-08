let pitch = 0
let roll = 0
let rollAbs = 0
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    //rollAbs = Math.abs(roll)
    /*if (roll < 40 && roll > -40) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }*/
    // serial.writeLine("Pitch: " + pitch)
    serial.writeLine("Pitch: " + pitch)
    serial.writeLine("Roll: " + roll)
    //serial.writeLine("rollAbs: " + rollAbs)
    basic.pause(30)
})
