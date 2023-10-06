#!/usr/bin/python3
if __name__ == "__main__":

    import sys

    # Retrieve the command-line arguments
    argv = sys.argv[1:]

    # Initialize a variable to store the sum
    sum_of_arguments = 0

# Iterate through the arguments and add them to the sum
for arg in argv:
    sum_of_arguments += int(arg)

    # Print the result
    print(sum_of_arguments)
