let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10' 
// */


let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';


console.log(`O número ${numeroUm} e a string '${stringUm}' são ${numeroUm == stringUm ? 'iguais' : 'diferentes'} considerando a comparação não estrita.`);
console.log(`O número ${numeroTrinta} e a string '${stringTrinta}' são ${numeroTrinta ==stringTrinta?'iguais':'diferentes'} considerando a comparação nãoestrita.`);
console.log(` O número ${numeroDez} e a string '${stringDez}' são ${numeroDez ==stringDez? 'iguais':'diferentes'} considerando a comparação não estrita.` );

console.log(`O número ${numeroUm} e a string '${stringUm}' são ${numeroUm === stringUm ? 'iguais' : 'diferentes'} considerando a comparação estrita.`);
console.log(`O número ${numeroTrinta} e a string '${stringTrinta}' são ${numeroTrinta === stringTrinta ? 'iguais' : 'diferentes'} considerando a comparação estrita.`);
console.log(`O número ${numeroDez} e a string '${stringDez}' são ${numeroDez === stringDez ? 'iguais' : 'diferentes'} considerando a comparação estrita.`);


let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm ==stringUm) {
    console.log('As variavésiss numeroUm e stringUm têm o mesmo valor, mas tipos diferentes');
} else{
    console.log('As variávei numeroUm e stringUm NNão têm o mesmo valor');
}

if (numeroTrinta == stringTrinta) {
    console.log('As variáveis númeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes');
} else{
    console.log('As variáveis numeroTrinta e stringTrinta não têm o mesmo valor');
}

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e strinDez têm o mesmo valor, mas tipos diferentes');
    } else {
        console.log('As varáveis numeroDez e stringDez não tem o mesmo valor');
    }
