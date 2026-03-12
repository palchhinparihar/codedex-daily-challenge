def find_missing_colors(grid):
  # all possible Holi colors (reference list)
  all_colors = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"]
  
  # stores colors not found in the grid
  missing = []  

  # check each color individually
  for color in all_colors:
    found = False  # assume color is not present
    
    # search for the color in each row
    for row in grid:
      if color in row:
        found = True  # color exists in grid
        break         # stop searching further
    
    # if never found in any row, it's missing
    if not found:
      missing.append(color)

  return missing


grid = [
  ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟥"],
  ["🟨", "🟩", "🟦", "🟪", "🟥", "🟧", "🟨"],
  ["🟦", "🟥", "🟧", "🟨", "🟩", "🟪", "🟦"],
  ["🟩", "🟦", "🟪", "🟥", "🟧", "🟨", "🟩"],
  ["🟧", "🟨", "🟩", "🟦", "🟪", "🟥", "🟧"],
  ["🟪", "🟧", "🟨", "🟩", "🟦", "🟥", "🟪"],
  ["🟥", "🟦", "🟩", "🟪", "🟨", "🟧", "🟦"]
]

print(find_missing_colors(grid))