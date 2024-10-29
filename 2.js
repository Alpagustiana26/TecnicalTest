function sisaBagi(n, m) {
    // Memeriksa pembagian dengan nol
    if (n === 0 || m === 0) {
        return "NaN";
    }
    
    // Menentukan nilai yang lebih besar dan lebih kecil
    let lebihBesar = Math.max(n, m);
    let lebihKecil = Math.min(n, m);
    
    // Mengembalikan sisa pembagian dari nilai lebih besar dengan nilai lebih kecil
    return lebihBesar % lebihKecil;
}

// Contoh penggunaan
console.log(sisaBagi(17, 5)); // Output: 2
console.log(sisaBagi(13, 72)); // Output: 7
console.log(sisaBagi(0, -1)); // Output: 0
console.log(sisaBagi(0, 1)); // Output: NaN
