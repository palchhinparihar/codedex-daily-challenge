from statistics import mean

def analyze(percentages):
  # average yearly change: (last value − first value) / number of year intervals
  net_change = (percentages[-1] - percentages[0]) / (len(percentages) - 1)

  # average percentage in the first 3 years and last 3 years
  first_3_avg = mean(percentages[:3])
  last_3_avg = mean(percentages[-3:])

  # determine overall trend based on the two averages
  if last_3_avg > first_3_avg:
    trend = "improving"
  elif last_3_avg < first_3_avg:
    trend = "declining"
  else:
    trend = "stagnating"

  # count how many times the percentage dropped compared to the previous year
  dips = 0
  for i in range(len(percentages) - 1):
    if percentages[i] > percentages[i + 1]:
      dips += 1

  # return: yearly net change (rounded), trend label, and number of dips
  return round(net_change, 4), trend, dips


percentages = [31.0, 31.0, 33.0, 35.0, 36.0, 36.0, 36.2, 36.7, 37.1]
print(analyze(percentages))