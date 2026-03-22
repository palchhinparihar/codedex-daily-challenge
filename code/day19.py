'''
Approach:
Slide a 5-day window through the temperature list.
Compute the average temperature for each window.
Return the first day where the 5-day average reaches at least 15, else -1.
'''

def cherry_blossoms(temps):
  n = len(temps)

  # start from day 4 (total 5 days needed)
  for i in range(4, n):  
    # get the 5 days window
    five_day_sum = sum(temps[i-4:i+1])  

    # avg of the 5 days
    avg = five_day_sum / 5

    # check if the avg is greater than or equal to 15°C
    if avg >= 15:
      return i + 1  # days are 1-indexed

  return -1


temps = [10, 11, 13, 14, 16, 17, 18]
print(cherry_blossoms(temps))