// Have the function LetterCapitalize(str) take the str parameter being passed and 
// capitalize the first letter of each word. Words will be separated by only one space. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) { 
    return str.split(" ")
        .map((word) => {
            return word.substr(0, 1).toUpperCase() + word.substr(1 , word.count)
        })
        .join(' ')
}