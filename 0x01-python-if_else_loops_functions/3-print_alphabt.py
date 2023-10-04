#!/usr/bin/python3

# Initialize an empty string to store the alphabet
alphabet = ""

# Loop through each character in the alphabet and add it to the string if it's not 'e' or 'q'
for letter in 'abcdefghijklmnopqrstuvwxyz':
    if letter != 'e' and letter != 'q':
        alphabet += letter

# Use a single print statement to print the entire alphabet without newlines
print(f"{alphabet}")
