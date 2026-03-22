'''
Approach:
Split the transcript into words.
Clean each word by keeping only alphabet letters and lowercasing.
Store cleaned words in a set and return the set size.
'''

def find_unique_words(transcript):
  unique = set()  # set to store unique words

  for word in transcript.split():  # split sentence into words
    clean_word = ""

    for ch in word:  
      # remove punctuation
      if ch.isalpha(): 
        clean_word += ch.lower() # store the character in lowercase

    unique.add(clean_word)  # store to the unique set

  return len(unique)  # return count of unique words


print(find_unique_words("Mr. Watson, come here, I want to see you."))