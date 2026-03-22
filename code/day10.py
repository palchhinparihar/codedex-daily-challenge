'''
Approach:
Try combinations in increasing size: single numbers, then pairs, then triplets.
As soon as a combination sums to 42, return its size.
If no combination works up to size 3, return -1.
'''

def minimum_components(components):
  # Round 1 - single items
  for num in components:
    if num == 42:
      return 1 

  # Round 2 - pairs
  for num1 in components:
    for num2 in components:
        if num1 + num2 == 42:
          return 2

  # Round 3 - triplets
  for num1 in components:
    for num2 in components:
      for num3 in components:
        if num1 + num2 + num3 == 42:
          return 3

  return -1

print(minimum_components([1, 2, 3, 4, 5, 6])) 
print(minimum_components([10, 20, 11, 1]))