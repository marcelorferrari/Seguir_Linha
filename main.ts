input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (ligado == 0) {
        ligado = 1
    } else {
        ligado = 1
    }
})
let ligado = 0
let LCal = pins.analogReadPin(AnalogPin.P0)
let RCal = pins.analogReadPin(AnalogPin.P2)
ligado = 0
robotbit.MotorRun(robotbit.Motors.M1A, 0)
robotbit.MotorRun(robotbit.Motors.M2B, 0)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (ligado == 1) {
        if (pins.analogReadPin(AnalogPin.P0) <= LCal - 30) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            robotbit.MotorRun(robotbit.Motors.M1A, 75)
            robotbit.MotorRun(robotbit.Motors.M2B, -25)
            basic.pause(50)
        } else if (pins.analogReadPin(AnalogPin.P2) <= RCal - 30) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            robotbit.MotorRun(robotbit.Motors.M1A, -25)
            robotbit.MotorRun(robotbit.Motors.M2B, 75)
            basic.pause(50)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            robotbit.MotorRun(robotbit.Motors.M1A, 50)
            robotbit.MotorRun(robotbit.Motors.M2B, 50)
        }
    }
})
