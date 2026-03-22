def tweet_balance(tweet):
  # edge case
  if tweet == '':
    return 140

  length = 0
  words = tweet.split() # split the tweet based on spaces

  # look for word by word in the tweet string
  for word in words:
    if word.startswith("http://") or word.startswith("https://"): # for url - 23 characters count
      length += 23
    elif word.startswith('@'): # for username starting with @ - 20 characters count
      length += 20
    else:
      length += len(word) # for others - count normally
  
  length += len(words) - 1 # add the space value

  return 140 - length # number of characters left out 


tweet = "Check out this link https://www.averylongurlthatgoesonnnnnn.com and this one https://short.co too!"
print(tweet_balance(tweet))