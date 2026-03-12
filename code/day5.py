def calculate_score(elements):
  tes = 0  # total element score

  for name, base, judges in elements:
    judges = sorted(judges)        # sort judge scores
    trimmed = judges[1:-1]         # remove lowest and highest
    avg_goe = sum(trimmed) / len(trimmed)  # average remaining scores

    element_score = base + (avg_goe * 0.1 * base)  # calculate element score
    tes += element_score        # add to total score

  return round(tes, 1)          # return rounded total


print(calculate_score([
  ("Triple Flip",            9.7,  [3, 2, 3, 3, 2, 4, 3, 2, 3]),
  ("Triple Lutz+Toe Combo", 12.5,  [4, 5, 4, 5, 5, 4, 4, 3, 4]),
  ("Triple Salchow",         7.0,  [2, 3, 2, 2, 3, 2, 2, 3, 2]),
  ("Triple Loop",            6.0,  [3, 3, 2, 4, 3, 3, 2, 3, 2]),
  ("Step Sequence",          3.3,  [4, 4, 4, 4, 3, 3, 4, 3, 4])
]))