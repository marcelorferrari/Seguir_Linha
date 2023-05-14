input.onButtonPressed(Button.A, function () {
    while (true) {
        if (pins.analogReadPin(AnalogPin.P0) <= LCal - 30) {
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
            basic.pause(50)
        } else if (pins.analogReadPin(AnalogPin.P2) <= RCal - 30) {
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 25)
            basic.pause(50)
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 40)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 40)
        }
    }
})
let RCal = 0
let LCal = 0
LCal = pins.analogReadPin(AnalogPin.P0)
RCal = pins.analogReadPin(AnalogPin.P2)
robotbit.MotorRun(robotbit.Motors.M1A, 100)
robotbit.MotorRun(robotbit.Motors.M1B, 100)
