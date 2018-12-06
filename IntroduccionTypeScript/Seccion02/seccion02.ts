// En TypeScript se pueden tipar las variables. Esto dá más control sobre ellas en JS, por ejemplo nos impide definir variables con el mismo nombre

let nombre: string = "Peter";
let numero: number = 12345;
let cualquiera: any = "Esto podría ser cualquier tipo";

console.log(nombre + "Este es el hambito de fuera del if");
if (true) {
  // Aquí se puede declarar otra variable llamada nombre por que no comparte el ambito de la primera
  let nombre: string = "Rodolfo";
  console.log(nombre + "Este es el hambito del if");
}

// const son parecido a las constantes
const CONSTANTE: string = "Esto es una constante";

let spiderman = {
  nombre: "Peter",
  edad: 30
};

spiderman = {
  nombre: "Antonio",
  edad: 45
};

console.log(CONSTANTE);

let apellido: string = "Ramiro";

// Para crear Templates usamos ` ` y para poder llamar a las variables dentro de un Template podemos usar el ${ nombre de la variable }
let texto = `Hola,${nombre} ${apellido}`;

console.log(texto);

texto = `${spiderman.nombre} tiene ${spiderman.edad} de edad`;

function getNombre(): string {
  return "Esto es JS puro";
}
//Dentro de ${} además se puede escribir codigo JS
let text2: string = `${ getNombre() }`;
console.log(text2);

/**
 * Parametros obligatorios y por defecto
 */

//Parametros Obligatorios

function activar(quien: string) {
  let mensaje: string = `${quien} activó la Batiseñal`;

  console.log(mensaje);
}

activar("Gordon");
//Parametros por defecto, al definir el paramereo de la variable bjeto le estamos diciendo que ese parametro puede definirse o no en la llamada de la función, en caso de que no se defina, se tomara por defecto el valor declarado en la función.

// Por norma no se puede poner un valor opcional al principio de la llamada y si la llamada tiene valores opcionales no se puede poner un valor obligatorio al final.
//(opcional, obligatorio) <-- Mal
//(obligatorio, opcional, obligatorio ) <- Mal
//(obligatorio, obligatorio, opcional) <- Bien

function activar2(
  quien: string,
  objeto: string = "la bomba",
  momento?: string
) {
  let mensaje: string;
  if (momento) {
    mensaje = `${quien} activó la ${objeto} en la ${momento}`;
  } else {
    mensaje = `${quien} activó la ${objeto}`;
  }

  console.log(mensaje);
}

activar2("Gordon", "batiseñal", "tarde");

/**
 * Funciones de Flecha
 */

 let miFuncion = function a(b) {
     return b;
}
 
let miFuncionF = b => b;

console.log(miFuncion('Usando una función normal'));

console.log(miFuncionF('Utilizando una función de flecha'));

//Función de fecha con más de un parametro
let miFuncion3 = (a: number, b: number) => a + b;

//función con más de una linea
let miFuncionF4 = (nombre: string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

let hulk = {
    nombre: 'Hulk',
    smash() {
        setTimeout(() => console.log(`${ this.nombre } smash!!!`), 1500 );
    }
}

/* hulk.smash(); */

/**
 * Destructuración de objetos
 */

let avenger = {
    nombres: 'Steve',
    clave: 'Capitán America',
    poder: 'Droga'
}
 
let { nombres, clave, poder } = avenger;

console.log( nombres, clave, poder); 