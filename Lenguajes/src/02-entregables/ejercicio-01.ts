console.log("========== DELIVERABLE 01 ==========");

const arrayExample = [1, 2, 3, 4, 5];
console.log(`Array content: ${arrayExample}`);

/**
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */
const head = (inputArray) => {
    const [firstElement] = inputArray;
    return firstElement;
};

console.log("First element:", head(arrayExample)); // <-- 1

/**
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelva todos menos el primer elemento. Utiliza rest operator.
 */
const tail = (inputArray) => {
    const [, ...remainingElements] = inputArray;
    return remainingElements;
};

console.log("All elements except the first:", tail(arrayExample)); // <-- [2, 3, 4, 5]

/**
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */
const init = (inputArray) => {
    return inputArray.slice(0, -1); // Utiliza un índice negativo para mayor claridad
};

console.log("All elements except the last:", init(arrayExample)); // <-- [1, 2, 3, 4]

/**
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */
const last = (inputArray) => {
    return inputArray[inputArray.length - 1]; // Accede directamente al índice del último elemento
};

console.log("Last element:", last(arrayExample)); // <-- 5