import math

import mido

mid = mido.MidiFile("pasdoble-vilanova.midi")


def note_number_to_hz(note_number: int) -> int:
    return math.floor(440.0 * (2.0 ** ((note_number - 69) / 12.0)))


for i in range(0, len(mid.tracks[1])):
    track = mid.tracks[1][i]
    if (i + 1) == len(mid.tracks[1]):
        break
    next_track = mid.tracks[1][i + 1]
    if track.type == "note_on":
        if track.velocity > 0:
            print(f"[{note_number_to_hz(track.note)}, {next_track.time}],")
        elif next_track.time > 0:
            print(f"[None, {next_track.time}],")
