#!/usr/bin/python3
word = "Holberton"

# Get the first 3 letters
first_three_letters = word[:3]

# Get the last 2 letters
last_two_letters = word[-2:]

# Remove the first and last letter
removed_letters = word[1:-1]

print(f"First 3 letters: {first_three_letters}")
print(f"Last 2 letters: {last_two_letters}")
print(f"Without first and last letter: {removed_letters}")
