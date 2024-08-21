function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let longestSubstring = "";
    let currentSubstring = "";
    let charSet = new Set();

    let i = 0;
    let j = 0;

    while (i < s.length && j < s.length) {
        if (!charSet.has(s[j])) {
            charSet.add(s[j]);
            currentSubstring += s[j];
            j++;
            if (currentSubstring.length > maxLen) {
                maxLen = currentSubstring.length;
                longestSubstring = currentSubstring;
            }
        } else {
            charSet.delete(s[i]);
            currentSubstring = currentSubstring.slice(1);
            i++;
        }
    }

    return { maxLen, longestSubstring };
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));