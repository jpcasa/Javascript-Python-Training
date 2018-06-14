# Regex
import re

# Open File
names_file = open('names.txt')
data = names_file.read()
names_file.close()

# Matches for Substring at the beggining
# print(re.match(r'Love', data))

# Matches for Substring in all the string
# print(re.search(r'Kenneth', data))

print(re.search(r'\d\d\d-\d\d\d\d', data))
