'''
Approach:
Use recursion to flatten the list. Iterate through each element in the list, and if we encounter a nested list, we will call the flatten function on that nested list.
If we encounter an integer, we will add it to our flattened list.
This way, we will be able to flatten any level of nesting in the list.
'''

def flatten(lst):
  # 1d list to add all elements
  flattened_list = []

  for val in lst:
    # checking if current item is int or list
    if isinstance(val, list):
      # flatten the nested list 'val' and add its elements to the flattened_list
      flattened_list.extend(flatten(val))
    else:
      flattened_list.append(val) # add the val (int) to the flattened_list
  
  return flattened_list


lst = [1, 2, [3, [4, 5]], [[6, 7], 8, 9]]
print(flatten(lst))