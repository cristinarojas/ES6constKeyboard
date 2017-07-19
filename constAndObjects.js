// When we assign an object to the variable, the reference of the object is what the 
// variable holds and not the object itself

const a = {
	"name": "Cristina"
};

console.log(a.name); // Cristina

a.name = "Carlos";

console.log(a.name); // Carlos - the object is mutable

a = {}; // "a" is read-only

// When assigning an object to a constant variable, the reference of the object
// becomes constant to the variable and not to the object itself.Therefore, the object is mutable