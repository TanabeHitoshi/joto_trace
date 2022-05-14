let 左センサー白 = 0
let 右センサー白 = 0
let 右センサー黒 = 0
let 左センサー黒 = 0
input.onButtonPressed(Button.B, function () {
    左センサー白 = 0
    右センサー白 = 0
    右センサー黒 = 1023
    左センサー黒 = 1023
    while (true) {
        serial.writeLine("calibration")
        if (pins.analogReadPin(AnalogPin.P1) < 左センサー白) {
            左センサー白 = pins.analogReadPin(AnalogPin.P1)
        }
        if (pins.analogReadPin(AnalogPin.P0) < 右センサー白) {
            右センサー白 = pins.analogReadPin(AnalogPin.P0)
        }
        if (pins.analogReadPin(AnalogPin.P1) > 左センサー黒) {
            左センサー黒 = pins.analogReadPin(AnalogPin.P1)
        }
        if (pins.analogReadPin(AnalogPin.P0) > 右センサー黒) {
            右センサー黒 = pins.analogReadPin(AnalogPin.P0)
        }
        if (pins.digitalReadPin(DigitalPin.P5) == 0) {
            basic.pause(1000)
            serial.writeValue("L_B", 左センサー黒)
            serial.writeValue("L_W", 左センサー白)
            serial.writeValue("R_B", 右センサー黒)
            serial.writeValue("R_W", 右センサー白)
            break;
        }
    }
})
function 左モーター (数値: number) {
    if (数値 == 0) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (数値 > 0) {
        pins.analogWritePin(AnalogPin.P15, 数値)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.analogWritePin(AnalogPin.P15, Math.abs(数値))
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
function 右モーター (数値2: number) {
    if (数値2 == 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (数値2 > 0) {
        pins.analogWritePin(AnalogPin.P13, 数値2)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
        pins.analogWritePin(AnalogPin.P13, Math.abs(数値2))
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
}
basic.forever(function () {
	
})
