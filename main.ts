input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Schaltwert += -5
    basic.showNumber(Schaltwert)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Schaltwert += 5
    basic.showNumber(Schaltwert)
})
function _ (Kommentar: string) {
	
}
let Lichtschranke = 0
let Schaltwert = 0
_("Erweiterung Grove laden")
let o4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
Schaltwert = 60
basic.showLeds(`
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    # . . . #
    `)
loops.everyInterval(500, function () {
    Lichtschranke = pins.analogReadPin(AnalogPin.P2)
    o4digit.show(Lichtschranke)
    if (Lichtschranke < Schaltwert) {
        basic.setLedColor(0xff0000)
        motors.motorPower(0)
    } else {
        basic.setLedColor(0xff0000)
        motors.motorPower(95)
    }
})
