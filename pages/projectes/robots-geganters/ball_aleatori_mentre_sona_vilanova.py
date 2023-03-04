def vilanova():
    return [
        [587, 192],
        [493, 192],
        [587, 192],
        [659, 384],
        [783, 384],
        [739, 384],
        [587, 384],
        [493, 768],
        [493, 192],
        [440, 192],
        [493, 192],
        [523, 192],
        [493, 96],
        [523, 192],
        [None, 384],
        [523, 192],
        [493, 192],
        [523, 192],
        [587, 192],
        [493, 96],
        [587, 192],
        [None, 384],
        [587, 192],
        [493, 192],
        [587, 192],
        [659, 384],
        [783, 384],
        [739, 384],
        [587, 384],
        [493, 768],
        [493, 192],
        [440, 192],
        [493, 192],
        [523, 192],
        [493, 96],
        [523, 192],
        [None, 384],
        [440, 192],
        [493, 192],
        [440, 192],
        [391, 1536],
        [None, 384],
        [440, 384],
        [493, 384],
        [523, 384],
        [587, 384],
        [739, 768],
        [659, 768],
        [587, 384],
        [440, 384],
        [587, 384],
        [523, 384],
        [493, 1536],
        [None, 384],
        [440, 384],
        [493, 384],
        [523, 384],
        [587, 384],
        [739, 768],
        [659, 768],
        [659, 384],
        [739, 384],
        [659, 384],
        [587, 384],
        [783, 192],
        [783, 96],
        [783, 96],
        [783, 192],
        [783, 192],
        [783, 192],
        [587, 192],
        [493, 192],
        [587, 192],
        [659, 384],
        [783, 384],
        [739, 384],
        [587, 384],
        [493, 768],
        [493, 192],
        [440, 192],
        [493, 192],
        [523, 192],
        [493, 96],
        [523, 192],
        [None, 384],
        [523, 192],
        [493, 192],
        [523, 192],
        [587, 192],
        [493, 96],
        [587, 192],
        [None, 384],
        [587, 192],
        [493, 192],
        [587, 192],
        [659, 384],
        [783, 384],
        [739, 384],
        [587, 384],
        [493, 768],
        [493, 192],
        [440, 192],
        [493, 192],
        [523, 192],
        [493, 96],
        [523, 192],
        [None, 384],
        [440, 192],
        [493, 192],
        [440, 192],
        [391, 1536],
        [None, 384],
        [440, 384],
        [493, 384],
        [523, 384],
        [587, 384],
        [739, 768],
        [659, 768],
        [587, 384],
        [440, 384],
        [587, 384],
        [523, 384],
        [493, 1536],
        [None, 384],
        [440, 384],
        [493, 384],
        [523, 384],
        [587, 384],
        [739, 768],
        [659, 768],
        [659, 384],
        [739, 384],
        [659, 384],
        [587, 384],
        [783, 192],
        [783, 96],
        [783, 96],
        [783, 192],
        [783, 192],
        [783, 384]
    ]


def faces_obstacle():
    return maqueen.ultrasonic(PingUnit.CENTIMETERS) < 30 and maqueen.ultrasonic(PingUnit.CENTIMETERS) != 0


def is_it_time_to_dance(running_straight_for: int, danced: bool):
    return running_straight_for > 500 and not danced


def turn(direction: bool):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255 if direction else 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0 if direction else 255)


def dance():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 255)


def straighten():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)


def can_next_note_fit(pause_for, next_note_time):
    return pause_for > next_note_time


def main_loop():
    current_song = vilanova()

    running_straight_for = 0
    danced = False

    while True:
        if faces_obstacle() or is_it_time_to_dance(running_straight_for, danced):
            if faces_obstacle():
                running_straight_for = 0
                danced = False
                turn(Math.random_boolean())
                pause_movement_for = 800
            else:
                danced = True
                if Math.random_boolean():
                    dance()
                    pause_movement_for = 4000
            while can_next_note_fit(pause_movement_for, next_note_time):
                pause_movement_for -= next_note_time
                if next_note_frequency is None:
                    basic.pause(next_note_time)
                else:
                    music.play_tone(next_note_frequency, next_note_time)
                next_note_frequency = current_song[0][0]
                next_note_time = current_song[0][1]
                current_song = current_song[1:]
            basic.pause(pause_movement_for)
        else:
            straighten()
            if next_note_frequency is None:
                basic.pause(next_note_time)
            else:
                music.play_tone(next_note_frequency, next_note_time)
            running_straight_for += next_note_time
            next_note_frequency = current_song[0][0]
            next_note_time = current_song[0][1]
            current_song = current_song[1:]


basic.forever(main_loop)
