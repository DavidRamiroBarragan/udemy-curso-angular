// En TypeScript se pueden tipar las variables. Esto dá más control sobre ellas en JS, por ejemplo nos impide definir variables con el mismo nombre
var nombre = 'Peter';
var numero = 12345;
var cualquiera = 'Esto podría ser cualquier tipo';
console.log(nombre + 'Este es el hambito de fuera del if');
if (true) {
    // Aquí se puede declarar otra variable llamada nombre por que no comparte el ambito de la primera
    var nombre_1 = 'Rodolfo';
    console.log(nombre_1 + 'Este es el hambito del if');
}
// const son parecido a las constantes
var CONSTANTE = 'Esto es una constante';
var spiderman = {
    nombre: 'Peter',
    edad: 30
};
spiderman = {
    nombre: 'Antonio',
    edad: 45
};
console.log(CONSTANTE);
var apellido = 'Ramiro';
// Para crear Templates usamos ` ` y para poder llamar a las variables dentro de un Tempate podemos usar el {{ }}
var texto = "Hola," + nombre + " " + apellido;
console.log(texto);
