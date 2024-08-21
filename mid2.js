function findUniqueSubstrings(str1, str2, length) {
    let uniqueSubstrings = new Set();
    for (let i = 0;  i <= str1.length - length; i++) {
        let substring = str1.substring(i, i + length);
        if (!str2.includes(substring)) {
            uniqueSubstrings.add(substring);
        }
    }
    return Array.from(uniqueSubstrings);
}

console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg",3));
console.log(findUniqueSubstrings("hellohello", "helloworld", 2));
console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));