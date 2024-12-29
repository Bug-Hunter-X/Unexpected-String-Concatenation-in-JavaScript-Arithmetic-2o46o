# Unexpected String Concatenation in JavaScript

This repository demonstrates a common error in JavaScript related to loose typing and arithmetic operations.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, leading to unexpected results.

## Bug Description

The `foo` function illustrates the problem. It attempts to add a number and a string.  JavaScript treats this as string concatenation, resulting in "12". The `bar` function demonstrates a correct implementation.