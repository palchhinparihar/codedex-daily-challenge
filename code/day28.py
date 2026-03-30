'''
Approach:
Split the total time into hours, minutes, and seconds.
Convert these values into integers and calculate the total time in seconds.
Divide the total time in seconds by the number of completed challenges to get the average time per challenge in seconds.
Finally, round the result to the nearest whole number and return it.
'''

def average_time(total, completed):
  # split the format in hours, minutes, seconds
  hours, mins, secs = total.split(':')

  # convert the string values into integers
  hours, mins, secs = int(hours), int(mins), int(secs)

  # total time in seconds
  total_seconds = (hours * 3600) + (mins * 60) + secs

  # the average time per challenge in seconds
  average_time_per_challenge = round(total_seconds / completed)

  return average_time_per_challenge


total = "10:49:08"
completed = 27
print(average_time(total, completed))