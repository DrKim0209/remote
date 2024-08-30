controller.down.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(0)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(0)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
forever(function () {
    if (controller.up.isPressed()) {
        radio.sendNumber(1)
    }
    if (controller.down.isPressed()) {
        radio.sendNumber(2)
    }
    if (controller.left.isPressed()) {
        radio.sendNumber(3)
    }
    if (controller.right.isPressed()) {
        radio.sendNumber(4)
    }
    if (controller.A.isPressed()) {
        radio.sendNumber(0)
    }
    if (controller.B.isPressed()) {
        radio.sendNumber(0)
    }
})
