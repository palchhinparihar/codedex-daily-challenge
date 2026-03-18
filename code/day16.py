def lucky_river(river, hours):
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
  
  return result


print(lucky_river(['💧', '☘️', '💧', '💧', '💧', '☘️', '💧', '💧'], 1))