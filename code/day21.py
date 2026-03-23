'''
Approach:
Iterate through each hour, reducing the volume by the leak percentage.
After each reduction, check if the volume falls below the threshold.
If it does, return -1 to indicate failure; otherwise, return the final volume rounded to 2 decimal places.
'''

def leaky_pipe(volume, leak, hours, threshold):
  # check for remaining volume for each hour
  for hour in range(hours):
    volume = volume * (1 - (leak / 100))

    # if volume doesn't pass min pressure threshold value
    # the pipe failed
    if volume < threshold:
      return -1
  
  return round(volume, 2)


volume = 1000
leak = 5
hours = 3
threshold = 100

print(leaky_pipe(volume, leak, hours, threshold))