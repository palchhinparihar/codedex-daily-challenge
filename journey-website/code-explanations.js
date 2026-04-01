const codeExplanations = {
  1: {
    code: `def wordle_guess(secret, guess):
  # variable to count matching letters in the correct position
  count = 0

  # loop through each index of the secret word (guess - both has same length)
  for i in range(len(secret)):
    # check if letters at the same position match
    if secret[i] == guess[i]:
      count += 1  # increase count if they match
  
  # return total number of correct position matches
  return count

print(wordle_guess("CODEX", "COINS"))`,
    approach: "Go through both words index by index. If letters at the same position match, increase a counter. Return the final counter as the answer. This function compares the secret word with the guess word character-by-character, counting how many letters are in the correct position, similar to the Wordle game mechanics.",
    complexity: "Time: O(1) - The loop runs exactly once per character position (fixed word length). In Wordle, you're always comparing two 5-letter words, making this a constant operation. Space: O(1) - Only a single counter variable is used."
  },
  2: {
    code: `def blood_moon(time):
  # split input time into hours and minutes
  hours, mins = time.split(':')
  hours, mins = int(hours), int(mins)

  next_3_time_intervals = []

  # convert starting time to total minutes
  total_mins = (hours * 60) + mins

  # generate next 3 times, each 168 minutes apart
  for _ in range(3):
    total_mins += 168  # add 168 minutes (2 hrs and 48 mins)

    # convert total minutes back to HH:MM (24-hour format)
    hours = (total_mins // 60) % 24
    mins = total_mins % 60
    next_3_time_intervals.append(f"{hours:02d}:{mins:02d}")
  
  return next_3_time_intervals`,
    approach: "Convert the input time string into total minutes by splitting on colon. Add 168 minutes (2 hours 48 minutes - the lunar cycle interval) to get next occurrence. Convert total minutes back to HH:MM 24-hour format. Repeat for 3 occurrences and format with leading zeros.",
    complexity: "Time: O(1) - we perform exactly 3 iterations regardless of input. Space: O(1) - we store a fixed-size list of 3 time strings."
  },
  3: {
    code: `def find_missing_colors(grid):
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
  
  return missing`,
    approach: "Maintain a fixed reference list of all 7 Holi colors. For each color, iterate through all rows in the grid to check if it appears anywhere. If a color is never found in any row, add it to the missing list. Return the complete list of missing colors.",
    complexity: "Time: O(1) - We always check exactly 7 fixed Holi colors (constant), so despite nested loops, the total constant-factor iterations remain bounded. Space: O(1) - Maximum 7 missing colors can be stored."
  },
  4: {
    code: `def dompier_music(switches):
  # map frequency values to musical notes
  frequency_to_note = {
    261: "C4",
    294: "D4",
    329: "E4",
    349: "F4",
    392: "G4",
    440: "A4",
    494: "B4",
    523: "C5",
    0: "REST"
  }

  notes = []  # store resulting notes

  for switch in switches:
    ans = 0
    power = 0

    # convert binary string to decimal
    for num in reversed(switch):
      ans += int(num) * (2 ** power)
      power += 1
    
    if ans in frequency_to_note.keys():
      notes.append(frequency_to_note[ans])
  
  return notes`,
    approach: "For each binary switch string, convert it to a decimal number by treating it as binary. Iterate through digits from right to left, multiplying each by the appropriate power of 2. Look up the decimal value in the frequency-to-note dictionary. Only append notes for valid frequencies, ignore invalid ones.",
    complexity: "Time: O(N) where N=number of switches. Each switch has a fixed length (constant bits), making binary-to-decimal conversion constant time per switch. Dictionary lookup and append are O(1). Space: O(N) for the resulting notes list."
  },
  5: {
    code: `def calculate_score(elements):
  tes = 0  # total element score

  for name, base, judges in elements:
    judges = sorted(judges)        # sort judge scores
    trimmed = judges[1:-1]         # remove lowest and highest
    avg_goe = sum(trimmed) / len(trimmed)  # average remaining scores

    element_score = base + (avg_goe * 0.1 * base)  # calculate element score
    tes += element_score        # add to total score

  return round(tes, 1)          # return rounded total`,
    approach: "For each skating element, sort the judge scores and remove the highest and lowest scores (trimming outliers). Calculate average of remaining scores. Multiply by 0.1 times the base value to get GOE adjustment. Add to base value for final element score. Sum all element scores and round to 1 decimal.",
    complexity: "Time: O(N) where N=number of elements. The number of judges per element is typically fixed (5-11), making sorting constant time. Each element does fixed comparisons and calculations. Space: O(1) - storing a fixed number of judge scores per element."
  },
  6: {
    code: `def calculate_sleep_debt(planned, actual):
  # initialize counters
  total_debt, curr_streak, longest_streak = 0, 0, 0  
  
  for i in range(7):  # iterate over each day of the week
    sleep_debt = max(0, planned[i] - actual[i])  # debt for this day (no negatives)
    total_debt += sleep_debt                      # accumulate total debt
    
    if sleep_debt == 0:
      curr_streak = 0              # no debt today, reset streak
    else:
      curr_streak += 1                                   # extend streak
      longest_streak = max(curr_streak, longest_streak)  # update best streak

  return total_debt + 1, longest_streak  # +1 accounts for Daylight Savings hour`,
    approach: "For each day of the week, calculate debt as the difference between planned and actual sleep (minimum 0 if you slept enough). Accumulate total debt. Track consecutive days with debt to find longest streak. Reset streak when a day has no debt. Return total debt plus DST adjustment and the longest streak.",
    complexity: "Time: O(1) - exactly 7 iterations (fixed week length). Space: O(1) - we use only constant variables."
  },
  7: {
    code: `from statistics import mean

def analyze(percentages):
  # average yearly change: (last value − first value) / number of year intervals
  net_change = (percentages[-1] - percentages[0]) / (len(percentages) - 1)

  # average percentage in the first 3 years and last 3 years
  first_3_avg = mean(percentages[:3])
  last_3_avg = mean(percentages[-3:])

  # determine overall trend based on the two averages
  if last_3_avg > first_3_avg:
    trend = "improving"
  elif last_3_avg < first_3_avg:
    trend = "declining"
  else:
    trend = "stagnating"

  # count how many times the percentage dropped compared to the previous year
  dips = 0
  for i in range(len(percentages) - 1):
    if percentages[i] > percentages[i + 1]:
      dips += 1

  # return: yearly net change (rounded), trend label, and number of dips
  return round(net_change, 4), trend, dips`,
    approach: "Calculate average yearly net change by dividing total change by years elapsed. Compare first 3-year average with last 3-year average to determine trend. Count the number of year-to-year decreases (dips) by comparing each consecutive pair. Return net change rounded to 4 decimals, trend label, and dip count.",
    complexity: "Time: O(n) where n=length of percentages (one pass for dips, rest are constant operations). Space: O(1) - only scalar variables and averages."
  },
  8: {
    code: `def calculate_descent(altitude):
  if altitude == 0:
    return 0.0  # no descent needed

  # atmospheric layers with descent rate (m/s)
  spheres = [
    {"lower": 700, "upper": 10000, "dr": 2000},
    {"lower": 85, "upper": 700, "dr": 500},
    {"lower": 50, "upper": 85, "dr": 200},
    {"lower": 12, "upper": 50, "dr": 75},
    {"lower": 0, "upper": 12, "dr": 20},
  ]

  total = 0  # total descent time

  for sphere in spheres:
    lower, upper, dr = sphere["lower"], sphere["upper"], sphere["dr"]
    
    if altitude > lower:  # check if altitude intersects this layer
      min_val = min(altitude, upper) - lower  # altitude portion within this layer
      total += (min_val * 1000) / dr  # convert km→m and add time
  
  return round(total, 1)  # round to 1 decimal place`,
    approach: "Define 5 atmospheric layers with altitude ranges and descent rates (dr). For each layer that the starting altitude enters, calculate distance traveled in that layer. Convert distance to time using the descent rate formula (distance / rate). Sum times across all layers and round to 1 decimal place.",
    complexity: "Time: O(1) - exactly 5 layers to check (constant). Space: O(1) - stores fixed atmospheric layer data."
  },
  9: {
    code: `def find_unique_words(transcript):
  unique = set()  # set to store unique words

  for word in transcript.split():  # split sentence into words
    clean_word = ""

    for ch in word:  
      # remove punctuation
      if ch.isalpha(): 
        clean_word += ch.lower() # store the character in lowercase

    unique.add(clean_word)  # store to the unique set

  return len(unique)  # return count of unique words

print(find_unique_words("Mr. Watson, come here, I want to see you."))`,
    approach: "Split transcript into words. For each word, iterate through characters and keep only alphabetic characters, converting to lowercase. Add cleaned word to a set to automatically handle duplicates. Return the size of the set which represents unique word count.",
    complexity: "Time: O(N) where N=total characters in transcript. We iterate through each character once during split and cleaning. Set insertion/lookup is O(1) average. Space: O(N) for storing unique words in the set."
  },
  10: {
    code: `def minimum_components(components):
  # Round 1 - single items
  for num in components:
    if num == 42:
      return 1 

  # Round 2 - pairs
  for num1 in components:
    for num2 in components:
        if num1 + num2 == 42:
          return 2

  # Round 3 - triplets
  for num1 in components:
    for num2 in components:
      for num3 in components:
        if num1 + num2 + num3 == 42:
          return 3

  return -1`,
    approach: "Use a greedy approach testing combinations in increasing size. First check if any single component equals 42. Then check all pairs for sum of 42. Then check all triplets. Return the size of the smallest combination found, or -1 if no valid combination exists.",
    complexity: "Time: O(n^3) worst case - must check up to all triplets. Space: O(1) - only uses loop variables."
  },
  11: {
    code: `from re import search

def check_url(address):
  # regex to check the correct url
  x = search("^https?://[a-z]+?\.?[\w]+\.[a-z]+$", address)

  if x:
    return "valid"
  else:
    return "invalid"

print(check_url("https://codedex.io"))`,
    approach: "Use a regular expression to validate URL format. Pattern checks for http or https protocol, domain name with letters, optional subdomain, and lowercase extension. If regex matches the entire address, URL is valid. Otherwise return invalid.",
    complexity: "Time: O(n) where n=length of URL string (regex matching). Space: O(1) - single match object."
  },
  12: {
    code: `def check_palindrome(sequence):
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

print(check_palindrome("Was it a car or a cat I saw"))`,
    approach: "Normalize text by converting to lowercase and removing spaces. Compare characters from both ends moving toward center. If any mirrored pair differs, return False. If all pairs match, return True.",
    complexity: "Time: O(n) where n=length of normalized sequence (check half the characters). Space: O(n) for normalized string storage."
  },
  13: {
    code: `from math import pi

def cut_pie(diameter, friends):
  # circumference of the pie
  circum = pi * diameter
  
  # slice per friend
  crust = circum / friends

  return round(crust, 2)

print(cut_pie(12, 5))`,
    approach: "Calculate circumference using pi times diameter. Divide circumference equally among friends to get crust per person. Round result to 2 decimal places for practical measurement.",
    complexity: "Time: O(1) - single multiplication and division. Space: O(1) - constant variables only."
  },
  14: {
    code: `def decode_message(message, shift):
  # alphabets list to map the characters
  alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
  original_text = ''
    
  for char in message:
    # storing the space character as it is
    if char == ' ':
      original_text += ' '
    else:
      # finding the index of the original character and adding it to the result
      index = (ord(char) - ord('a') - shift) % 26
      original_text += alphabets[index]
        
  return original_text

print(decode_message('aj xlmwtev xmnq lcsr ohhwx', 4))`,
    approach: "Process each character in the encoded message. Keep spaces unchanged. For letters, calculate original position by subtracting shift and using modulo 26 for wrap-around. Look up the letter at the original index and build decoded string.",
    complexity: "Time: O(n) where n=message length (one character processing per iteration). Space: O(n) for decoded message string storage."
  },
  15: {
    code: `def oscar_pool(predictions):
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
    
  return ans`,
    approach: "Define the actual Oscar winners for 4 categories. For each predictor, count correct predictions across all categories. Store scores in dictionary. Find predictor with highest score, handling ties by returning 'Tie' when multiple predictors match the highest score.",
    complexity: "Time: O(n) where n=number of predictions (constant 4 comparisons per predictor). Space: O(n) for storing predictions dictionary."
  },
  16: {
    code: `def lucky_river(river, hours):
  # copy of the original river list
  original = river[:]
  result = []

  # iterate over each position in the river
  for i in range(len(river)):
    is_green = False
   
    # check current pos + up to hours steps back
    for h in range(hours + 1):
      # ensure index is valid and within drift range
      if i - h >= 0 and original[i - h] == '☘️':
        is_green = True
        break

    result.append('☘️' if is_green else '💧')
  
  return result`,
    approach: "Create a copy of the original river state. For each position, look backward up to 'hours' steps to check if green dye (☘️) appears within reach. If green dye can reach this position within the time limit, mark it green. Otherwise keep it as water.",
    complexity: "Time: O(N * H) where N=river length and H=hours (maximum backward reach). For each position, we check up to H previous positions. Space: O(N) for storing the result list and original river copy."
  },
  17: {
    code: `def pick_voucher(vouchers, delays, max_wait):
  # variable to store the best option index
  best_option = -1
  index = -1

  for i in range(len(vouchers)):
    # check if we have to each maximum waiting limit
    if delays[i] <= max_wait:
      # calculate dollars per hour waited
      delays_per_hour_waited = vouchers[i] / delays[i]

      # basically store the best option index
      if best_option < delays_per_hour_waited:
        best_option = delays_per_hour_waited
        index = i
  
  return index`,
    approach: "Iterate through all voucher options. Filter only those with delay within max_wait constraint. For each valid option, calculate value-per-hour-waited ratio. Track the option with the highest ratio. Return the index of the best value option.",
    complexity: "Time: O(n) where n=number of vouchers (one pass through all). Space: O(1) - only variables for tracking best option."
  },
  18: {
    code: `def upset_probability(matchups):
  # store the upset probablities
  ans = []

  for matchup in matchups:
    # get higher and lower see values
    higher_seed, lower_seed = matchup[1], matchup[3] 

    # calculate the propability of upset with two teams' seed numbers
    upset = higher_seed / (higher_seed + lower_seed)

    ans.append(round(upset, 2))
  
  return ans`,
    approach: "For each tournament matchup, extract the seed numbers of both teams. Calculate upset probability using the ratio formula (higher_seed / total_seeds). Round each probability to 2 decimal places. Return list of all upset probabilities.",
    complexity: "Time: O(n) where n=number of matchups (one calculation per matchup). Space: O(n) for storing probability results."
  },
  19: {
    code: `def cherry_blossoms(temps):
  n = len(temps)

  # start from day 4 (total 5 days needed)
  for i in range(4, n):  
    # get the 5 days window
    five_day_sum = sum(temps[i-4:i+1])  

    # avg of the 5 days
    avg = five_day_sum / 5

    # check if the avg is greater than or equal to 15°C
    if avg >= 15:
      return i + 1  # days are 1-indexed

  return -1`,
    approach: "Slide a 5-day window through the temperature data. For each window position, sum all 5 temperatures and divide by 5 to get average. If average reaches at least 15 degrees, return the ending day number. If no window meets criteria, return -1.",
    complexity: "Time: O(n) where n=number of temperature readings. Space: O(1) - only uses loop and temporary sum variable."
  },
  20: {
    code: `def tweet_balance(tweet):
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

  return 140 - length # number of characters left out`,
    approach: "Handle empty tweet case first. Split tweet into words. Count effective length for each word: URLs count as 23 characters, mentions count as 20, regular words by actual length. Add spaces between words (word count - 1). Subtract total from 140 character limit.",
    complexity: "Time: O(n) where n=tweet length (one pass through words). Space: O(n) for words list from split."
  },
  21: {
    code: `def leaky_pipe(volume, leak, hours, threshold):
  # check for remaining volume for each hour
  for hour in range(hours):
    volume = volume * (1 - (leak / 100))

    # if volume doesn't pass min pressure threshold value
    # the pipe failed
    if volume < threshold:
      return -1
  
  return round(volume, 2)`,
    approach: "Iterate through each hour, reducing the volume by the leak percentage. After each reduction, check if the volume falls below the threshold. Return -1 if threshold is breached, or final rounded volume if successful.",
    complexity: "Time: O(N) where N=hours. We iterate once per hour performing constant-time arithmetic and comparison operations. Space: O(1) - only uses scalar variables for volume and arithmetic."
  },
  22: {
    code: `def cuddly_kittens(kittens, limit):
  n = len(kittens)
  left = 0 # left pointer for sliding window
  max_len = 0 # to track longest valid window
  
  for right in range(n):
    # calculate actual max and min in current window
    window_max = max(kittens[left:right+1])
    window_min = min(kittens[left:right+1])
    
    # shrink window while condition is violated
    while window_max - window_min > limit:
      left += 1
      if left <= right:
        # recalculate max and min for the new window
        window_max = max(kittens[left:right+1])
        window_min = min(kittens[left:right+1])
    
    # update max_len if current window is valid
    max_len = max(max_len, right - left + 1)
  
  return max_len`,
    approach: "Use sliding window technique with two pointers. Expand window by moving right pointer and compute max/min in current window. If difference exceeds limit, shrink from left until valid. Track the maximum valid window size found.",
    complexity: "Time: O(n^2) due to max/min computation in each iteration. Space: O(1) - only pointer and tracking variables."
  },
  23: {
    code: `def earthquake_anomaly(readings):
  # when no value of reading is present
  if len(readings) == 0:
    return []

  original = readings
  # sort the list - to get correct median
  readings = sorted(readings)
  n = len(readings)
  
  # find mid index
  mid_idx = n // 2
  if n % 2 == 0: # if the list is even
    # average of the two middle values
    val = (readings[mid_idx - 1] + readings[mid_idx]) / 2
  else:
    # in case of odd - get middle value
    val = readings[mid_idx]
  
  # flag value - to check if a reading is suspicious or not (has to be more than 1.5x)
  flag = val * 1.5

  ans = []
  for i in range(len(original)):
    # check for suspicious readings
    if original[i] > flag:
      ans.append(i)

  return ans`,
    approach: "Preserve original readings. Sort to find median value. For even length, average the two middle values; for odd length, take middle value. Calculate threshold as 1.5 times median. Scan original readings and collect indices of values exceeding threshold.",
    complexity: "Time: O(n*log(n)) due to sorting. Space: O(n) for sorted copy and result indices."
  },
  24: {
    code: `def streak_counter(games):
  # edge case
  if len(games) == 0:
    return 0

  # variables to store longest streak and current streak
  streak, count = 0, 0

  for game in games:
    if game == 'W': # increase count (streak) if it is a win
      count += 1
      streak = max(streak, count) # check for the longest streak
    elif game == 'L':  # streak is 0 when it is a loss game
      count = 0 
  
  return streak`,
    approach: "Iterate through game results. For each 'W', increment current count and update longest streak. For each 'L', reset current count. Ignore other characters. Return the longest winning streak found.",
    complexity: "Time: O(n) where n=number of games (single pass). Space: O(1) - only uses counters."
  },
  25: {
    code: `def flatten(lst):
  # 1d list to add all elements
  flattened_list = []

  for val in lst:
    # checking if current item is int or list
    if isinstance(val, list):
      # flatten the nested list 'val' and add its elements to the flattened_list
      flattened_list.extend(flatten(val))
    else:
      flattened_list.append(val) # add the val (int) to the flattened_list
  
  return flattened_list`,
    approach: "Use recursion to handle nested lists. For each element, check if it's a list. If yes, recursively flatten it and extend results. If no, append the scalar value. Build and return completely flattened list.",
    complexity: "Time: O(n) where n=total elements across all nesting levels. Space: O(d) where d=maximum nesting depth (recursion stack)."
  },
  26: {
    code: `def infinite_monkey(target, attempt):
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
  }`,
    approach: "Use sliding window to compare target text with every substring of attempt text with matching length. Count matching character positions and compute similarity percentage. Track window with highest similarity. Calculate expected attempts using probability formula.",
    complexity: "Time: O(n*m) where n=attempt length, m=target length (window comparisons). Space: O(m) for window strings."
  },
  27: {
    code: `from collections import deque

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
  return days if healthy_count == 0 else -1`,
    approach: "Use BFS (Breadth-First Search) to simulate infection spread. Initialize queue with all infected positions. Each day, process all currently infected cells and infect adjacent healthy neighbors. Count total infected people and track days elapsed until all are infected.",
    complexity: "Time: O(N * M) where N=rows and M=columns of the city grid. Each cell is visited exactly once in BFS. Space: O(N * M) for the queue and grid storage in worst case when all cells become infected."
  },
  28: {
    code: `def average_time(total, completed):
  # split the format in hours, minutes, seconds
  hours, mins, secs = total.split(':')

  # convert the string values into integers
  hours, mins, secs = int(hours), int(mins), int(secs)

  # total time in seconds
  total_seconds = (hours * 3600) + (mins * 60) + secs

  # the average time per challenge in seconds
  average_time_per_challenge = round(total_seconds / completed)

  return average_time_per_challenge`,
    approach: "Parse time string into hours, minutes, and seconds components. Convert each to integer. Calculate total time in seconds using conversion factors (1 hour=3600s, 1 min=60s). Divide by number of challenges and round for average seconds per challenge.",
    complexity: "Time: O(1) - string parsing and arithmetic are constant operations. Space: O(1) - only integer variables."
  },
  29: {
    code: `def emoticons_mood(message):
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
    
  return score`,
    approach: "Convert message to lowercase for case-insensitive matching. Define lists of happy and sad emoticons. For each emoticon, split message and count occurrences (split count - 1). Add happy counts to score, subtract sad counts. Return final sentiment score.",
    complexity: "Time: O(N * K) where N=message length and K=number of emoticons (6 happy + 3 sad = 9 total). Each split operation scans the entire message. Space: O(N) for each split result stored temporarily during the split operations."
  },
  30: {
    code: `def longest_streak(progress):
  # edge case
  if len(progress) == 0:
    return 0

  # variables to store current streak and longest streak
  current, longest = 0, 0

  for day in progress:
    # check for the day in which we have completed the challenge
    if day == '✅':
      current += 1
      longest = max(longest, current) # check for the longest one
    else:
      # if missed any day or took 5+ tries - reset the current streak
      current = 0
  
  return longest`,
    approach: "Iterate through daily progress marks. For each completed day (✅), increment current streak and update longest if current exceeds it. For any incomplete day (❌), reset current streak to zero. Return the maximum streak achieved throughout.",
    complexity: "Time: O(n) where n=number of days (single pass). Space: O(1) - only uses two counter variables."
  }
};
