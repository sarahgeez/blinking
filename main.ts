input.onPinPressed(TouchPin.P2, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(1000)
})
input.onPinPressed(TouchPin.P1, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(1000)
})
basic.forever(function () {
	
})
