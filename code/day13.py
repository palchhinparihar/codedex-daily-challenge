'''
Approach:
Use diameter and pi to compute circumference.
Divide circumference equally among friends.
Round to 2 decimals and return the crust length per friend.
'''

from math import pi

def cut_pie(diameter, friends):
  # circumference of the pie
  circum = pi * diameter
  
  # slice per friend
  crust = circum / friends

  return round(crust, 2)


print(cut_pie(12, 5))