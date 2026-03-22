'''
Approach:
Define atmospheric layers with their altitude ranges and descent rates.
For each layer touched by the starting altitude, compute time spent in that layer.
Sum all layer times and round the final descent time.
'''

def calculate_descent(altitude):
  if altitude == 0:
    return 0.0  # no descent needed

  # atmospheric layers with descent rate (m/s)
  spheres = [
    {"lower": 700, "upper": 10000, "dr": 2000},
    {"lower": 85, "upper": 700, "dr": 500},
    {"lower": 50, "upper": 85, "dr": 200},
    {"lower": 12, "upper": 50, "dr": 75},
    {"lower": 0, "upper": 12, "dr": 20},
  ]

  total = 0  # total descent time

  for sphere in spheres:
    lower, upper, dr = sphere["lower"], sphere["upper"], sphere["dr"]
    
    if altitude > lower:  # check if altitude intersects this layer
      min_val = min(altitude, upper) - lower  # altitude portion within this layer
      total += (min_val * 1000) / dr  # convert km→m and add time
  
  return round(total, 1)  # round to 1 decimal place


print(calculate_descent(0))