console.log("========== DELIVERABLE 03 ==========");

const user = {
    id: 1,
    name: 'Mónica',
    roles: ['ADMIN', 'SUPERVISOR'],
};

console.log("User object:", user);

/**
 * Implementa una función clone que, a partir de un objeto de entrada source, devuelva un nuevo objeto con las propiedades de source:
 **/
const clone = (source) => {
    return { ...source }; // Crea un nuevo objeto copiando las propiedades del original
};

const copiedUser = clone(user);
console.log("Cloned user:", copiedUser);

// Añadiendo una nueva propiedad al objeto clonado para demostrar que el original no se modifica
copiedUser.age = 26;
console.log("Modified cloned user:", copiedUser);
console.log("Original user remains unchanged:", user);

/**
 * Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target 
 * y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
 */

const obj1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const obj2 = { name: "Luisa", age: 31, married: true };

console.log("Object 1:", obj1);
console.log("Object 2:", obj2);

const mergeObjects = (source, target) => {
    return {
        ...clone(target), // Clona las propiedades de target para mantener la inmutabilidad
        ...clone(source), // Sobrescribe las propiedades de target con las de source
    };
};

console.log("Merged object:", mergeObjects(obj1, obj2)); 
// {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
