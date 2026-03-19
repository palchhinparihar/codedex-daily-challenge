def pick_voucher(vouchers, delays, max_wait):
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
  
  return index


vouchers = [0 ,0]
delays = [1, 2]
max_wait = 2
print(pick_voucher(vouchers, delays, max_wait))