def blood_moon(time):
  # split input time into hours and minutes
  hours, mins = time.split(':')
  hours, mins = int(hours), int(mins)

  next_3_time_intervals = []

  # convert starting time to total minutes
  total_mins = (hours * 60) + mins

  # generate next 3 times, each 168 minutes apart
  for _ in range(3):
    total_mins += 168  # add 168 minutes (2 hrs and 48 mins)

    # convert total minutes back to HH:MM (24-hour format)
    hours = (total_mins // 60) % 24
    mins = total_mins % 60

    # format time with leading zeros
    next_3_time_intervals.append(f"{hours:02d}:{mins:02d}")

  return next_3_time_intervals


print(blood_moon("22:30"))