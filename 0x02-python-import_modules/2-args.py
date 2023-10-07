#!/usr/bin/python3
if __name__ == "__main__":
    import sys

    # Retrieve the command-line arguments
    argv = sys.argv[1:]

    # Calculate the number of arguments
    num_arguments = len(argv)

    # Define a string that contains the singular or plural form of "argument"
    plural_suffix = 's' if num_arguments != 1 else ''
    # Create the message and print it
    message = "{} argument.".format(num_arguments, plural_suffix)
    print(message)
