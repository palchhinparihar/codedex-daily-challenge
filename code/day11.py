'''
Approach:
Use one regular expression to test whether the URL matches the expected format.
If regex finds a match, return "valid".
Otherwise return "invalid".
'''

from re import search

def check_url(address):
  # regex to check the correct url
  x = search("^https?://[a-z]+?\.?[\w]+\.[a-z]+$", address)

  if x:
    return "valid"
  else:
    return "invalid"

  
print(check_url("https://codedex.io"))
print(check_url("https://www.codedex.io"))
print(check_url("https://codedex.2.io"))