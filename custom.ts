
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#FFA500 icon="" block="城工トレース"
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function 左モーター(L_speed: number): void {
        if (L_speed == 0) {
            pins.digitalWritePin(DigitalPin.P15, 0)
        } else if (L_speed > 0) {
            pins.analogWritePin(AnalogPin.P15, L_speed)
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else {
            pins.analogWritePin(AnalogPin.P15, Math.abs(L_speed))
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
    //% block
    export function 右モーター(R_speed: number): void {
        if (R_speed == 0) {
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else if (R_speed > 0) {
            pins.analogWritePin(AnalogPin.P13, R_speed)
            pins.digitalWritePin(DigitalPin.P14, 0)
        } else {
            pins.analogWritePin(AnalogPin.P13, Math.abs(R_speed))
            pins.digitalWritePin(DigitalPin.P14, 1)
        }
    }
    //% block
    export function 走る(speed: number,rotate:number): void {
        let LSpeed = speed + rotate
        if(LSpeed > 1023){
            LSpeed = 1023
        }
        if (LSpeed < -1023) {
            LSpeed = -1023
        }

        let RSpeed = speed - rotate
        if (RSpeed > 1023) {
            RSpeed = 1023
        }
        if (RSpeed < -1023) {
             RSpeed = -1023
        }

        左モーター(LSpeed)
        右モーター(RSpeed)
    }
    //% block
    export function モニタ(): void {
        serial.writeNumbers([pins.analogReadPin(AnalogPin.P1), pins.analogReadPin(AnalogPin.P0)])
        serial.writeValue("postion", pins.analogReadPin(AnalogPin.P1) - pins.analogReadPin(AnalogPin.P0))
        serial.writeLine("------------------------------------------------------------------------")
        basic.pause(100)
    }
   /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
