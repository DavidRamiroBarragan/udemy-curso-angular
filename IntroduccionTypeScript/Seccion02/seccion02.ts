// En TypeScript se pueden tipar las variables. Esto dá más control sobre ellas en JS
let nombre: string = 'Peter';
let numero: number = 12345;
let cualquiera: any = 'Esto podría ser cualquier tipo';

console.log(nombre  + 'Este es el hambito de fuera del if');
if (true) {
    // Aquí se puede declarar otra variable llamada nombre por que no comparte el ambito de la primera
    let nombre: string = 'Rodolfo';
    console.log(nombre  + 'Este es el hambito del if');
}

// const son parecido a las constantes
const CONSTANTE: string = 'Esto es una constante';

let spiderman = {
    nombre: 'Peter',
    edad: 30
}

spiderman = {
    nombre: 'Antonio',
    edad: 45,
}

console.log(CONSTANTE);

let texto: string = 'Hola mundo';
let apellido: string = 'Ramiro';

// Para crear Templates usamos ` ` y para poder llamar a las variables dentro de un Tempate podemos usar el {{ }}
texto = `Hola {{nombre}} {{apellido}}`;

console.log(texto);