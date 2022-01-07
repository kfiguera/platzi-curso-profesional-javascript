// Boolean
let muted: boolean = true;
//muted = 'Hola';
muted = false;

//Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Kevin';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
//people.push("9000");

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

//enum
enum Color {
    Rojo= "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}
let colorFavorito: Color = Color.Rojo;
console.log(`Mi color Favorito es ${colorFavorito}`);

// Any
let comodin: any = "joker";
comodin = {type: "wildcard"};

//Object
let someObject: object = {type: "wildcard"};