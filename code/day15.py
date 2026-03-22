'''
Approach:
For each predictor, compare 4 category picks with the actual winners.
Count matches to get that predictor's score.
Return the highest scorer's name, or "Tie" when scores are equal.
'''

def oscar_pool(predictions):
  # actual winners list
  actual_winners = ['One Battle After Another', 'Michael B. Jordan', 'Jessie Buckley', 'Paul Thomas Anderson']

  highest_pred = {}

  # check from predictions for particular name - if they predictions match with actual winners
  for name, picture, actor, actress, director in predictions:
    highest_pred[name] = 0

    if picture == actual_winners[0]:
      highest_pred[name] += 1
    if actor == actual_winners[1]:
      highest_pred[name] += 1
    if actress == actual_winners[2]:
      highest_pred[name] += 1
    if director == actual_winners[3]:
      highest_pred[name] += 1
  
  ans = ''
  highest_prediction = 0

  # find the person with highest score -  if tie simple return "Tie"
  for name, count in highest_pred.items():
    if count > highest_prediction:
      highest_prediction = count
      ans = name
    elif highest_prediction == count:
      ans = 'Tie'
    
  return ans


predictions = [
  ["Rotten Tomatoes", "The Secret Agent", "Wagner Moura", "Renate Reinsve", "Kleber Mendonça Filho"],
  ["IMDb", "One Battle After Another", "Timothée Chalamet", "Jessie Buckley", "Chloé Zhao"]
]

print(oscar_pool(predictions))