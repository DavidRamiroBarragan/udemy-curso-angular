// En TypeScript se pueden tipar las variables. Esto dá más control sobre ellas en JS, por ejemplo nos impide definir variables con el mismo nombre

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

let apellido: string = 'Ramiro';

// Para crear Templates usamos ` ` y para poder llamar a las variables dentro de un Template podemos usar el ${ nombre de la variable }
let texto = `Hola,${ nombre } ${ apellido }`;

console.log(texto);

texto = `${spiderman.nombre} tiene ${spiderman.edad} de edad`;

//Dentro de ${} además se puede escribir codigo JS
let text2: string = ``
console.log(texto);