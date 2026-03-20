def upset_probability(matchups):
  # store the upset probablities
  ans = []

  for matchup in matchups:
    # get higher and lower see values
    higher_seed, lower_seed = matchup[1], matchup[3] 

    # calculate the propability of upset with two teams' seed numbers
    upset = higher_seed / (higher_seed + lower_seed)

    ans.append(round(upset, 2))
  
  return ans


matchups = [
  ["Duke", 1, "Siena", 16],
  ["Ohio State", 8, "TCU", 9]
]

print(upset_probability(matchups))