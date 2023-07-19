# Notes

You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

POMODORO 1:
- ✅ Initial setup & refactor
- ✅ Create User stories
- ✅ UAT1.1: When user pass no input, it should return an exception
- ✅ UAT1.2: When user pass empty array, it should return an exception
- ✅ UAT1.3: When user pass string, it should return an exception
- ✅ UAT1.4: When user pass array with only one string, it should return an exception
- Refactor story 1
- 🚧 UAT2.1: When user pass ['a','a'], it should return 'a a'

Pomodoro 2:
- ✅ UAT2.1: When user pass ['a','a'], it should return 'a a'
- ✅ UAT2.2: When user pass ['ab','cd'], it should return 
'a' 'c'
'b' 'd' 
- ✅ UAT2.3: When user pass ['ab','c'], it should return 
'a' 'c'
'b' ' ' 
- ✅ UAT2.4: When user pass ['Ab','Cd'], it should return 
'A' 'C'
'b' 'd'