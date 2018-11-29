var str = ""


return str.split("").map((f,a,d) => {
    let _n = str.charCodeAt(a) === 122 ? 96 : 
    [97, 101, 105, 111, 117].includes(str.charCodeAt(a) + 1) ? ((str.charCodeAt(a) + 1) - 32) : str.charCodeAt(a) >= 48 && str.charCodeAt(a) <= 57 ? str.charCodeAt(a) :  str.charCodeAt(a) + 1; 
    d[a] = String.fromCharCode(_n);
    return d[a];
}).join("")

s.forEach()