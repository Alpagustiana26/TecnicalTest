function gabungString(str1, str2, str3) {
    let hasil = "";
    
    for (let i = 0; i < str1.length; i++) {
        hasil += str1[i] + str2[i] + str3[i];
    }
    
    return hasil;
}

// Contoh penggunaan
console.log(gabungString("aa", "bb", "cc")); // Output: "abcabc"
console.log(gabungString("xyz", "123", "abc")); // Output: "x1ay2bz3c"
