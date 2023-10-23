#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    count = 0  # Initialize a count to keep track of the number of elements printed
    try:
        for i in range(x):
            print(my_list[i], end=" ")  # Print each element on the same line
            count += 1  # Increment the count
    except IndexError:
        pass  # If an IndexError occurs, just continue

    print()  # Print a new line
    return count  # Return the real number of elements printed

# Example usage:
my_list = [1, 2, 3, 4, 5]
x = 8
real_count = safe_print_list(my_list, x)
print(f"Real number of elements printed: {real_count}")
