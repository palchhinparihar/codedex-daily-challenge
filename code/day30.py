'''
Approach:
Check for the edge case of an empty progress list first.
Then iterate through the progress list and check for each day if the challenge was completed (marked with '✅').
If it was completed, increment the current streak and update the longest streak if the current one is longer.
If the challenge was not completed (marked with '❌'), reset the current streak to zero.
Return the longest streak found after iterating through the entire list.
'''

def longest_streak(progress):
  # edge case
  if len(progress) == 0:
    return 0

  # variables to store current streak and longest streak
  current, longest = 0, 0

  for day in progress:
    # check for the day in which we have completed the challenge
    if day == '✅':
      current += 1
      longest = max(longest, current) # check for the longest one
    else:
      # if missed any day or took 5+ tries - reset the current streak
      current = 0
  
  return longest


progress = ['✅', '✅', '❌', '✅', '✅', '✅', '❌', '❌', '✅', '✅']
print(longest_streak(progress))