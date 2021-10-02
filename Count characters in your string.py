'''Details:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result
should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.
------------------------------------------------------------------------------------------------------------------------
My solution:
'''

def count(string):
    d1 = {}
    for i in string:
        counter = string.count(i)
        if i not in d1:
            d1[i]=counter
    return d1