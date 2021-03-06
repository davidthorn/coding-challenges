// Have the function SimpleSymbols(str) take the str parameter being passed 
// and determine if it is an acceptable sequence by either returning the string
// true or false. The str parameter will be composed of + and = symbols with several 
// letters between them (ie. ++d+===+c++==a) and for the string to be true each letter
// must be surrounded by a + symbol. So the string to the left would be false.
// The string will not be empty and will have at least one letter. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// Solution copied from https://www.coderbyte.com/results/cjordanball:Simple%20Symbols:JavaScript

function SimpleSymbols(str) { 

    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
        return false;
    }
    else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    }
    else {
     return true; 
    }
           
}   