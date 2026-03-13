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