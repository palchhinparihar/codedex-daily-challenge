'''
Approach:
Use a sliding window to compare the target word with every substring of the attempt string that has the same length.
For each window, count how many characters match at the same index and compute a similarity score.
Track the window with the highest similarity and return its start index, similarity percentage, and estimated attempts.
If either input is empty, return default values because no valid comparison can be made.

'''

def infinite_monkey(target, attempt):
  # get lengths of both strings
  target_len, attempt_len = len(target), len(attempt)
  
  # handle empty input
  if target_len == 0 or attempt_len == 0:
    return {
      "best_index": -1,   # no valid match
      "similarity": 0.0,  # no similarity
      "attempts": None    # cannot estimate
    }

  max_similarity, best_index = 0, 0  # track best match

  # slide window over attempt string
  for start in range(attempt_len - target_len + 1):
    window = attempt[start:start + target_len]  # current substring
    
    # count matching characters
    match_count = sum(1 for a, b in zip(target, window) if a == b)
    similarity = match_count / target_len  # similarity ratio

    # update best match if higher similarity found
    if similarity > max_similarity:
      max_similarity = similarity
      best_index = start

  # convert similarity to percentage
  rounded_similarity = round(max_similarity * 100, 2)

  # estimate attempts (infinite monkey idea)
  if max_similarity > 0:
    attempts = round(1 / (max_similarity ** target_len))
  else:
    attempts = None

  # Return results
  return {
    "best_index": best_index,
    "similarity": rounded_similarity,
    "attempts": attempts
  }


target = 'hamlet'
attempt = 'xxhamxetxxxx'
print(infinite_monkey(target, attempt))