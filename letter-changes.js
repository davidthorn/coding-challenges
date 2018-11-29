// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterChanges(str) {

    str = str.replace(/[a-zA-Z]/g , r => {
        return r.toLowerCase() === 'z' ? 'A' : String.fromCharCode(r.charCodeAt(0) + 1)
    })
    return str.replace(/[aeiou]/g , f => { return f.toUpperCase() })

}

LetterChanges()