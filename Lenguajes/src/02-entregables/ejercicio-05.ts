console.log("========== DELIVERABLE 05 ==========");

/**
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
 * Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
 * Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
 * El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
 *      "Congratulations!!!. You won <número de monedas> coins!!";
 * y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
 *   "Good luck next time!!".
 */

class SlotMachine {
    private coinCount: number;
    private roulettes: boolean[];

    constructor() {
        this.resetMachine();
    }

    private resetMachine(): void {
        this.coinCount = 0;
        this.roulettes = [false, false, false];
    }

    private generateRandomBoolean(): boolean {
        return Math.random() > 0.5; // Genera true o false aleatoriamente
    }

    public play(): void {
        this.coinCount++;

        // Generar estado de las tres ruletas
        this.roulettes = this.roulettes.map(() => this.generateRandomBoolean());

        const hasWon = this.roulettes.every((result) => result); // Verifica si todos los valores son true
        if (hasWon) {
            console.log(`🎉 Congratulations!!! You won ${this.coinCount} coins!! 🎉`);
            this.resetMachine();
        } else {
            console.log("💔 Good luck next time!! 💔");
        }
    }
}

// Ejemplo de uso
const slotMachine1 = new SlotMachine();
for (let attempt = 1; attempt <= 50; attempt++) {
    slotMachine1.play();
}
