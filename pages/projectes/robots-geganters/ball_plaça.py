def wiggle():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 15)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
    basic.pause(150)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 15)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 15)
    basic.pause(150)
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.pause(100)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 15)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 15)
    basic.pause(150)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 15)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 15)
    basic.pause(150)
    maqueen.motor_stop(maqueen.Motors.ALL)


def advance_and_meet():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 20)
    basic.pause(3000)
    maqueen.motor_stop(maqueen.Motors.ALL)


def stop_for(ms):
    basic.pause(ms)


def rotate_on_itself():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    basic.pause(4200)
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.pause(1000)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    basic.pause(4200)
    maqueen.motor_stop(maqueen.Motors.ALL)


def rotate_around_other():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    basic.pause(1200)
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.pause(1000)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    basic.pause(17000)
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.pause(1000)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    basic.pause(1200)
    maqueen.motor_stop(maqueen.Motors.ALL)


def follow_other():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 15)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 15)
    basic.pause(9000)
    maqueen.motor_stop(maqueen.Motors.ALL)



def ball_de_placa():
    # for _ in range(3):
    #     wiggle()
    basic.pause(1000)
    advance_and_meet()
    basic.pause(1000)
    rotate_on_itself()
    basic.pause(1000)
    rotate_around_other()
    basic.pause(1000)
    follow_other()


input.on_button_pressed(Button.A, ball_de_placa)
