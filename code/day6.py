'''
Approach:
Compare planned vs actual sleep for each day and keep only positive debt.
Accumulate total debt and track consecutive debt days for longest streak.
Return total debt (with DST adjustment) and longest streak.
'''

def calculate_sleep_debt(planned, actual):
  # initialize counters
  total_debt, curr_streak, longest_streak = 0, 0, 0  
  
  for i in range(7):  # iterate over each day of the week
    sleep_debt = max(0, planned[i] - actual[i])  # debt for this day (no negatives)
    total_debt += sleep_debt                      # accumulate total debt
    
    if sleep_debt == 0:
      curr_streak = 0              # no debt today, reset streak
    else:
      curr_streak += 1                                   # extend streak
      longest_streak = max(curr_streak, longest_streak)  # update best streak

  return total_debt + 1, longest_streak  # +1 accounts for Daylight Savings hour


print(calculate_sleep_debt([7.5, 8, 7.5, 8, 8.5, 8, 7.5], [5, 12, 6, 6, 9, 8, 6.5]))