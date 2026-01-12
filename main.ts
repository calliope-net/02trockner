input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Schaltwert += -5
    basic.showNumber(Schaltwert)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Schaltwert += 5
    basic.showNumber(Schaltwert)
})
let Schaltwert = 0
pins.digitalWritePin(DigitalPin.P0, 1)
Schaltwert = 60
basic.showLeds(`
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    # . . . #
    `)
loops.everyInterval(500, function () {
    if (pins.analogReadPin(AnalogReadWritePin.P2) < Schaltwert) {
        basic.setLedColor(0xff0000)
        motors.motorPower(0)
    } else {
        basic.setLedColor(0x00ff00)
        motors.motorPower(95)
    }
})
