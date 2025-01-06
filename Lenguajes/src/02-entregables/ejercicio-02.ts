console.log("========== DELIVERABLE 02 ==========");

const vowelsUpper = ['A', 'E', 'I', 'O', 'U'];
const vowelsLower = ['a', 'e', 'i', 'o', 'u'];
const mixedValues = [true, false, 'boolean', 'false', 'TODO'];
const numbers = [1.0, 2.0, 3.0, 4.0, 5.5, 100];

console.log("Arrays:", vowelsUpper, vowelsLower, mixedValues, numbers);

/**
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 **/
const concatArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]; // Combina ambos arrays usando spread
};

console.log("Concatenated arrays (vowelsUpper + vowelsLower):", concatArrays(vowelsUpper, vowelsLower));

/**
 * Opcional:
 * Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). 
 * No utilices el método Array.prototype.concat.
 */
const concatMultipleArrays = (...arrayGroups) => {
    return arrayGroups.reduce((acc, current) => [...acc, ...current], []);
};

console.log(
    "Concatenated multiple arrays:",
    concatMultipleArrays(vowelsUpper, vowelsLower, mixedValues, numbers)
);
