def wordle_guess(secret, guess):
  # variable to count matching letters in the correct position
  count = 0

  # loop through each index of the secret word (guess - both has same length)
  for i in range(len(secret)):
    # check if letters at the same position match
    if secret[i] == guess[i]:
      count += 1  # increase count if they match
  
  # return total number of correct position matches
  return count

print(wordle_guess("CODEX", "COINS"))