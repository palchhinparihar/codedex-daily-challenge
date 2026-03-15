from math import pi

def cut_pie(diameter, friends):
  # circumference of the pie
  circum = pi * diameter
  
  # slice per friend
  crust = circum / friends

  return round(crust, 2)


print(cut_pie(12, 5))