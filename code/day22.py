'''
Approach:
Use a sliding window with two pointers (`left` and `right`) to represent a current valid group of kittens.
For each new `right` position, compute the maximum and minimum values in the current window.
If `max - min` becomes greater than `limit`, move `left` forward (shrink the window) until the condition is valid again.
Track the largest window size seen during traversal, since that is the maximum number of cuddly kittens.
'''

def cuddly_kittens(kittens, limit):
  n = len(kittens)
  left = 0 # left pointer for sliding window
  max_len = 0 # to track longest valid window
  
  for right in range(n):
    # calculate actual max and min in current window
    window_max = max(kittens[left:right+1])
    window_min = min(kittens[left:right+1])
    
    # shrink window while condition is violated
    while window_max - window_min > limit:
      left += 1
      if left <= right:
        # recalculate max and min for the new window
        window_max = max(kittens[left:right+1])
        window_min = min(kittens[left:right+1])
    
    # update max_len if current window is valid
    max_len = max(max_len, right - left + 1)
  
  return max_len


kittens = [1, 3, 6, 7, 9]
limit = 3

print(cuddly_kittens(kittens, limit))