'''
Approach:
First, we need to find the median of the readings.
To find the median, we sort the list of readings and then find the middle value (or average of the two middle values if the list has an even number of elements).
Once we have the median, we calculate the threshold for an anomaly, which is 1.5 times the median.
Finally, we iterate through the original list of readings and check if any reading exceeds the threshold. If it does, we add its index to the result list.
'''

def earthquake_anomaly(readings):
  # when no value of reading is present
  if len(readings) == 0:
    return []

  original = readings
  # sort the list - to get correct median
  readings = sorted(readings)
  n = len(readings)
  
  # find mid index
  mid_idx = n // 2
  if n % 2 == 0: # if the list is even
    # average of the two middle values
    val = (readings[mid_idx - 1] + readings[mid_idx]) / 2
  else:
    # in case of odd - get middle value
    val = readings[mid_idx]
  
  # flag value - to check if a reading is suspicious or not (has to be more than 1.5x)
  flag = val * 1.5

  ans = []
  for i in range(len(original)):
    # check for suspicious readings
    if original[i] > flag:
      ans.append(i)

  return ans


readings = [3.0, 7.5, 2.8, 8.1, 3.2, 2.9]
print(earthquake_anomaly(readings))