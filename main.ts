input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.driveForwards(100)
    kitronik_servo_lite.turnRight(80)
    kitronik_servo_lite.driveForwards(100)
    kitronik_servo_lite.turnRight(80)
    kitronik_servo_lite.driveForwards(100)
    kitronik_servo_lite.turnRight(80)
    kitronik_servo_lite.driveForwards(100)
    kitronik_servo_lite.turnRight(80)
})
let strip: neopixel.Strip = null
for (let index = 0; index < 2; index++) {
    music.playMelody("C5 B A G F E D C ", 120)
    soundExpression.hello.playUntilDone()
    music.playMelody("C D E F G A B C5 ", 120)
    soundExpression.hello.playUntilDone()
}
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
})
