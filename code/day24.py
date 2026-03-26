'''
Approach:
Iterate through the games list, counting consecutive 'W' characters.
Reset the count when an 'L' is encountered, and keep track of the maximum count (streak) found.
Return the longest streak of wins.
'''

def streak_counter(games):
  # edge case
  if len(games) == 0:
    return 0

  # variables to store longest streak and current streak
  streak, count = 0, 0

  for game in games:
    if game == 'W': # increase count (streak) if it is a win
      count += 1
      streak = max(streak, count) # check for the longest streak
    elif game == 'L':  # streak is 0 when it is a loss game
      count = 0 
  
  return streak 


games = ["W", "W", "R", "W", "W", "L", "W"]

print(streak_counter(games))