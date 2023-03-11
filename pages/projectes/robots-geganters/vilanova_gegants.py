def part1():
    global part
    part = "part1"


def part2():
    global part, advancing
    part = "part2"
    advancing = True


def part3():
    global part, gegant
    part = "part3"
    if gegant == "M":
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    else:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    basic.pause(1000)
    while maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) != 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) != 0:
        pass
    basic.pause(1000)
    while maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) != 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) != 0:
        pass
    maqueen.motor_stop(maqueen.Motors.ALL)


def part4():
    global part, gegant
    part = "part4"
    if gegant == "M":
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    basic.pause(1000)
    while maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) != 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) != 0:
        pass
    basic.pause(1000)
    while maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) != 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) != 0:
        pass
    maqueen.motor_stop(maqueen.Motors.ALL)


def part5():
    global part, gegant, advancing
    part = "part5"
    if gegant == "M":
        basic.pause(1200)
        advancing = True
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        basic.pause(300)
        while maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) != 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) != 0:
            pass
        advancing = True


def part6():
    global part, gegant, advancing
    part = "part6"
    advancing = False
    maqueen.motor_stop(maqueen.Motors.ALL)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(300)
    while maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) != 0 or maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) != 0:
        pass
    advancing = True


def part7():
    global part, gegant, advancing
    part = "part7"
    advancing = False
    maqueen.motor_stop(maqueen.Motors.ALL)


def part8():
    global part, gegant, advancing
    part = "part8"
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    basic.pause(4000)


gegant = "?"
part = ""
advancing = False


def select_magi():
    global gegant
    gegant = "M"
    basic.show_string(gegant)


def select_xixilona():
    global gegant
    gegant = "X"
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
    """)


def on_received_string(received_string):
    global part, advancing
    if received_string == "part1":
        part1()
    elif received_string == "part2":
        part2()
    elif received_string == "stop" and part == "part2" and gegant == "X":
        advancing = False
        maqueen.motor_stop(maqueen.Motors.ALL)
    elif received_string == "part3":
        part3()
    elif received_string == "part4":
        part4()
    elif received_string == "part5":
        part5()
    elif received_string == "part6":
        part6()
    elif received_string == "part7":
        part7()
    elif received_string == "part8":
        part8()


def advance_following_line():
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 25)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 0:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 15)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT) == 0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT) == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 15)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 25)


def advancing_loop():
    global advancing
    if advancing:
        advance_following_line()


def stop_detector():
    global gegant, part, advancing
    if part == "part2" and gegant == "M" and maqueen.ultrasonic(PingUnit.CENTIMETERS) < 12:
        advancing = False
        maqueen.motor_stop(maqueen.Motors.ALL)
        radio.send_string("stop")


def init():
    global gegant
    input.on_button_pressed(Button.A, select_magi)
    input.on_button_pressed(Button.B, select_xixilona)
    radio.on_received_string(on_received_string)
    basic.forever(advancing_loop)
    basic.forever(stop_detector)
    radio.set_group(100)
    basic.show_string(gegant)


init()
