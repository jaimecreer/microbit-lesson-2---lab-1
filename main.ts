function drawRandomDots (goal: number) {
    current = 0
    while (current < goal) {
        x = randint(0, 4)
        y = randint(0, 4)
        if (!(led.point(x, y))) {
            led.plot(x, y)
            current += 1
        }
    }
}
function drawDots () {
    led.plot(2, 2)
    led.plotBrightness(2, 3, 150)
}
function drawRandomDot () {
    led.plot(randint(0, 4), randint(0, 4))
}
let y = 0
let x = 0
let current = 0
drawRandomDots(15)
