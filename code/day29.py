'''
Approach:
First check for edge case and convert the message to lowercase.
Then we can define two lists of happy and sad emoticons.
We can then loop through each list and count the number of occurrences of each emoticon in the message using the split method.
For happy emoticons, we add the count to the score, and for sad emoticons, we subtract the count from the score.
Finally, we return the overall mood score.
'''

def emoticons_mood(message):
  # edge case
  if len(message) == 0:
    return 0

  message = message.lower() # message into lowercase
  score = 0 # overall mood based score 
    
  happy = [":)", ":p", "xd", ":3", "<3", "\\m/"] # happy emoticons 
  sad = [":(", ":'(", "t(-.-t)"] # sad emoticons 
    
  # count happy emoticons 
  for emo in happy:
    count = len(message.split(emo)) - 1
    score += count
    
  # count sad emoticons
  for emo in sad:
    count = len(message.split(emo)) - 1
    score -= count
    
  return score
        

message = "let's freaking go!!! \\m/\\m/\\m/\\m/\\m/\\m/ t(-.-t)"
print(emoticons_mood(message))