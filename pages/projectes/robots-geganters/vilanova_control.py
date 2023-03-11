def play_vilanova():
    basic.show_number(1)
    radio.send_string("part1")
    part1()
    basic.show_number(2)
    radio.send_string("part2")
    part2()
    basic.show_number(3)
    radio.send_string("part3")
    part3()
    basic.show_number(4)
    radio.send_string("part4")
    part4()
    basic.show_number(5)
    radio.send_string("part5")
    part5()
    basic.show_number(6)
    radio.send_string("part6")
    part6()
    basic.show_number(7)
    radio.send_string("part7")
    part7()
    basic.show_number(8)
    radio.send_string("part8")
    part8()
    basic.show_leds("""
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
    """)


def part1():
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.play_tone(587, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(587, music.beat(BeatFraction.HALF))


def part2():
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(392, music.beat(BeatFraction.DOUBLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))


def part3():
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))


def part4():
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.HALF))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))


def part5():
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.play_tone(587, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.play_tone(587, music.beat(BeatFraction.HALF))


def part6():
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.play_tone(523, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.WHOLE))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.HALF))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(392, music.beat(BeatFraction.DOUBLE))
    music.play_tone(392, music.beat(BeatFraction.WHOLE))


def part7():
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.DOUBLE))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))


def part8():
    music.play_tone(440, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(523, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.DOUBLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(740, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(659, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.WHOLE))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.HALF))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.QUARTER))
    music.rest(music.beat(BeatFraction.SIXTEENTH))
    music.play_tone(784, music.beat(BeatFraction.DOUBLE))
    music.play_tone(784, music.beat(BeatFraction.DOUBLE))


radio.set_group(100)
music.set_tempo(140)
music.set_volume(255)
basic.show_leds("""
    . . # # .
    . # . . .
    . # . . .
    . # . . .
    . . # # .
""")

input.on_button_pressed(Button.A, play_vilanova)
