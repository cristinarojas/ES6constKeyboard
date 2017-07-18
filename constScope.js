// Const variables are block-scoped variables. 

const a = 12; // Accesible globally

function myFunction() {
	console.log(a);

	const b = 13; // Accesible throughout function

	if(true) {
		const c = 14; // Accesible throughout the "if" statement
	}

	console.log(c); // Reference error exception
}

myFunction();