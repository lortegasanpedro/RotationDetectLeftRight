let pitch = 0
let roll = 0
let rollAbs = 0
let x = 0
let y = 0
let z = 0
basic.forever(function () {
    //pitch = input.rotation(Rotation.Pitch)
    //roll = input.rotation(Rotation.Roll)
    x = input.acceleration(Dimension.X)
    //y = input.acceleration(Dimension.Y)
    //z = input.acceleration(Dimension.Z)
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
    //serial.writeLine("Pitch: " + pitch)
    //serial.writeLine("Roll: " + roll)
    serial.writeLine("X: " + x)
    //serial.writeLine("Y: " + y)
    //serial.writeLine("Z: " + z)
    //serial.writeLine("rollAbs: " + rollAbs)
    basic.pause(30)
})
