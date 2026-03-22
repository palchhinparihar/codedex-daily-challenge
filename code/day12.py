'''
Approach:
Normalize text by lowercasing and removing spaces.
Compare mirrored characters from start and end moving inward.
If any pair differs, return False; if all match, return True.
'''

def check_palindrome(sequence):
  # convert to lowercase
  # remove spaces
  sequence = sequence.lower().replace(' ', '')

  n = len(sequence)
  for i in range(n // 2):
    # check if the first and last character doesn't match
    if sequence[i] != sequence[n - 1 - i]:
      return False

  # all characters matches (valid palindrome)
  return True


print(check_palindrome("Was it a car or a cat I saw"))