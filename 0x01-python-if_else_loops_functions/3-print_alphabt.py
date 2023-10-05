#!/usr/bin/python3

# Initialize an empty string to store the alphabet
alphabet = ""

for letter in 'abcdefghijklmnopqrstuvwxyz':
    if letter != 'e' and letter != 'q':
        alphabet += letter
print("{}".format(alphabet))
