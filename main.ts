let y2 = 0
let y1 = 0
let Summe = 0
let Index = 0
let EMG = 0
let list1: number[] = []
let list2: number[] = []
serial.redirectToUSB()
let Messungszahl = 19
for (let index = 0; index < Messungszahl; index++) {
    list1.push(0)
}
OLED12864_I2C.init(60)
OLED12864_I2C.on()
OLED12864_I2C.zoom(false)
basic.forever(function () {
    EMG = pins.analogReadPin(AnalogPin.C16)
    list1[Index] = EMG
    Index += 1
    if (Index > Messungszahl - 1) {
        Index = 0
    }
    Summe = 0
    for (let Index2 = 0; Index2 <= Messungszahl - 1; Index2++) {
        Summe += list1[Index2]
    }
    list2 = list1
    list2.sort()
y1 = Math.round(Math.map(Summe / Messungszahl, 400, 650, 63, 0))
    y2 = Math.map(list2[Math.idiv(Messungszahl, 2)], 400, 650, 63, 0)
    OLED12864_I2C.pixel(127, y1, 1)
    OLED12864_I2C.pixel(127, y2 - 30, 1)
    OLED12864_I2C.softscroll(
    OLED12864_I2C.scrollDirection.left,
    OLED12864_I2C.scrollType.shift,
    1,
    0,
    7
    )
})
