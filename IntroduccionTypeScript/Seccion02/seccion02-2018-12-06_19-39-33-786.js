// En TypeScript se pueden tipar las variables. Esto dá más control sobre ellas en JS, por ejemplo nos impide definir variables con el mismo nombre
var nombre = "Peter";
var numero = 12345;
var cualquiera = "Esto podría ser cualquier tipo";
console.log(nombre + "Este es el hambito de fuera del if");
if (true) {
    // Aquí se puede declarar otra variable llamada nombre por que no comparte el ambito de la primera
    var nombre_1 = "Rodolfo";
    console.log(nombre_1 + "Este es el hambito del if");
}
// const son parecido a las constantes
var CONSTANTE = "Esto es una constante";
var spiderman = {
    nombre: "Peter",
    edad: 30
};
spiderman = {
    nombre: "Antonio",
    edad: 45
};
console.log(CONSTANTE);
var apellido = "Ramiro";
// Para crear Templates usamos ` ` y para poder llamar a las variables dentro de un Template podemos usar el ${ nombre de la variable }
var texto = "Hola," + nombre + " " + apellido;
console.log(texto);
texto = spiderman.nombre + " tiene " + spiderman.edad + " de edad";
function getNombre() {
    return "Esto es JS puro";
}
//Dentro de ${} además se puede escribir codigo JS
var text2 = "" + getNombre();
console.log(text2);
/**
 * Parametros obligatorios y por defecto
 */
//Parametros Obligatorios
function activar(quien) {
    var mensaje = quien + " activ\u00F3 la Batise\u00F1al";
    console.log(mensaje);
}
activar("Gordon");
//Parametros por defecto, al definir el paramereo de la variable bjeto le estamos diciendo que ese parametro puede definirse o no en la llamada de la función, en caso de que no se defina, se tomara por defecto el valor declarado en la función.
// Por norma no se puede poner un valor opcional al principio de la llamada y si la llamada tiene valores opcionales no se puede poner un valor obligatorio al final.
//(opcional, obligatorio) <-- Mal
//(obligatorio, opcional, obligatorio ) <- Mal
//(obligatorio, obligatorio, opcional) <- Bien
function activar2(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "la bomba"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar2("Gordon", "batiseñal", "tarde");
/**
 * Funciones de Flecha
 */
var miFuncion = function a(b) {
    return b;
};
var miFuncionF = function (b) { return b; };
console.log(miFuncion(''));
