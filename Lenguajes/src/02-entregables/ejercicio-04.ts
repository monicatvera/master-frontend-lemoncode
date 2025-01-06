console.log("========== DELIVERABLE 04 ==========");

interface Book {
    title: string;
    isRead: boolean;
}

/**
 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
 * Un libro es un objeto con title como string y isRead como booleano. 
 * En caso de no existir el libro devolver false. TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
 **/
function isBookRead(bookList: Book[], titleToSearch: string): boolean {
    const book = bookList.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}

const library: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(`"Devastación" - leído:`, isBookRead(library, "Devastación")); // true
console.log(`"Canción de hielo y fuego" - leído:`, isBookRead(library, "Canción de hielo y fuego")); // false
console.log(`"Los Pilares de la Tierra" - leído:`, isBookRead(library, "Los Pilares de la Tierra")); // false
