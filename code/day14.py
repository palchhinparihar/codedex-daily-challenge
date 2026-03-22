'''
Approach:
Read the message character by character.
Keep spaces unchanged; for letters, shift backward by the given value using modulo.
Build and return the decoded string.
'''

def decode_message(message, shift):
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
    

print(decode_message('aj xlmwtev xmnq lcsr ohhwx', 4))