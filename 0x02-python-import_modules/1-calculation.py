#!/usr/bin/python3

if __name__ == "__main__":
	# Import functions from calculator_1.py
	from calculator_1 import add, sub, mul, div

	# Define the variables a and b
	a = 10
	b = 5

	# Perform calculations and print the results
	print("{} + {} = {}".format(a, b, add(a, b)))
	print("{} - {} = {}".format(a, b, sub(a, b)))
	print("{} * {} = {}".format(a, b, mul(a, b)))
	print("{} / {} = {}".format(a, b, div(a, b)))
