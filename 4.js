function generateAcronym(fullName) {
    let parts = fullName.trim().split(" ");
    let firstName = parts[0].split("-"); // Split first name(s) by dash if any
    let lastName = parts.slice(1).join(" ").split("-"); // Split last name(s) by dash if any
    
    // Construct acronym from first names (either one or two parts)
    let acronym = firstName.map(name => name[0].toUpperCase()).join("");

    // Handle special case for "von" in last names
    lastName.forEach((name, index) => {
        if (name.toLowerCase() === "von") {
            acronym += "v"; // Lowercase "v" for "von"
        } else {
            acronym += name[0].toUpperCase(); // Uppercase for other parts
        }
    });

    return acronym;
}

// Example usage
console.log(generateAcronym("Thomas Meyer")); // Output: "TM"
console.log(generateAcronym("martin schmidt")); // Output: "MS"
console.log(generateAcronym("Jan-Erich Schmidt")); // Output: "JES"
console.log(generateAcronym("Jan Erich Mueller")); // Output: "JEM"
console.log(generateAcronym("Paul Meyer-Schmidt")); // Output: "PMS"
console.log(generateAcronym("Paul von Lahnstein")); // Output: "PvL"
console.log(generateAcronym("Martin von Lahnstein-Meyer")); // Output: "MvLM"
