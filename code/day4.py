def dompier_music(switches):
  # map frequency values to musical notes
  frequency_to_note = {
    261: "C4",
    294: "D4",
    329: "E4",
    349: "F4",
    392: "G4",
    440: "A4",
    494: "B4",
    523: "C5",
    0: "REST"
  }

  notes = []  # store resulting notes

  for switch in switches:
    ans = 0
    power = 0

    # convert binary string to decimal
    for num in reversed(switch):
      ans += int(num) * (2 ** power)
      power += 1

    # if the frequency matches a note, add it to the result
    if ans in frequency_to_note.keys():
      notes.append(frequency_to_note[ans])

  return notes  # return list of detected notes


# Example input of switch states
print(dompier_music(["0100000101", "0100000101","0110001000", "0110001000","0110111000", "0110111000","0110001000", "0000000000"]))