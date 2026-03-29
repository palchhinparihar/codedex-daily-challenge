'''
Approach:
Use a breadth-first search (BFS) approach to simulate the spread of the infection day by day.
Initialize a queue with the positions of all initially infected people and count the number of healthy people.
For each day, process all currently infected people in the queue and attempt to infect their adjacent healthy neighbors.
If a healthy neighbor is infected, add it to the queue for processing in the next day and decrease the count of healthy people.
Continue this process until there are no more healthy people or the queue is empty (indicating some healthy people are unreachable).
'''

from collections import deque

def days_to_infect(city):
  # handle empty grid
  if not city or not city[0]:
    return 0

  rows, cols = len(city), len(city[0])
  queue = deque()          # stores positions of infected cells (bfs)
  healthy_count = 0        # count of healthy people

  # initialize queue with infected and count healthy
  for row in range(rows):
    for col in range(cols):
      if city[row][col] == '🧟':
        queue.append((row, col))      # add infected to queue
      elif city[row][col] == '👤':
        healthy_count += 1            # count healthy
    
  # if no healthy people, no days needed
  if healthy_count == 0:
    return 0
  
  days = 0
  # 4-directional movement (up, down, left, right)
  directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

  # bfs traversal level by level (each level = 1 day)
  while queue and healthy_count > 0:
    for _ in range(len(queue)):       # process current day's infections
      row, col = queue.popleft()

      # check all 4 adjacent cells
      for direction_row, direction_col in directions:
        final_row, final_col = row + direction_row, col + direction_col

        # if valid and healthy, infect it
        if 0 <= final_row < rows and 0 <= final_col < cols and city[final_row][final_col] == '👤':
          city[final_row][final_col] = '🧟'   # mark as infected
          healthy_count -= 1                  # decrease healthy count
          queue.append((final_row, final_col))# add to queue for next day
    
    days += 1   # one full round = one day

  # return days if all infected, else -1 (some unreachable)
  return days if healthy_count == 0 else -1


city = [
  ['👤', ' ', ' ', '🧟'],
  [' ', '👤', '👤', ' '],
  [' ', '👤', ' ', '👤'],
  ['👤', '👤', '👤', ' ']
]

print(days_to_infect(city))