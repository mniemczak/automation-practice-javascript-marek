// Zasięg globalny

// W języku JAVA // String myName = "Krzysztof"
// var
let myName
const mynewName = "Krzysztof"
myName = "Krzysztof"
myName = 2
myName = []
myName = {}

myName = () => {

}
myName = 2
myName = 'Krzysztof'

// Brak możliwości zmiany w ten sposób // mynewName = "Marek"
let secondName = mynewName.replaceAll('Krzysztof', 'Marek')

// Logowanie w konsoli typu danych zmiennej
console.log(typeof mynewName)

// Zasięg blokowy od nawiasu do nawiasu
function myNewFun () {
    let num = 7
    
    console.log(num)
    // Zasięg funkcyjny
    let mySecondFun = () => {
        let secondNumber = 9

        console.log(secondNumber)
        }

        mySecondFun()
    }

// Jeżeli odwołujemy się do funkcji lub metody to na końcu dodajemy ()
myNewFun()



// Dodaj funkcję w której znajduje się nowa zmienna z wartością liczbową
// w funkcji dodaj logowanie w konsoli tej zmiennej 
// uruchom kod
function logVariable () {

    let numberVariable = 66

    console.log(numberVariable)
}

logVariable()



// Funkcja i metoda w JS zawsze wygląda identycznie:
/*

Funkcja - Zawsze posiada słówko kluczowe function lub strzałkę i nawiasy okrągłe i klamrowe
Metoda - Zawsze zawiera nazwę oraz nawiasy okrągłe i klamrowe

Funkcja
function logVariable () {

}

Matoda
logVariable () {

}
*/

typeof null        // "object"
typeof undefined   // "undefined"
null === undefined // false
null == undefined // true
null === null // true
null == null // true
!null // true
isNaN(1 + null) // false
isNaN(1 + undefined) // true

// console.log(5 * null) // 0
// console.log(null * 5) // 0
// console.log("6" - 1)  // 5
// console.log(6 - "1")  // 5
// console.log("6" + 1)  // 61 String
// console.log(6 + "1")  // 61 String
// console.log("three" * 2) // NaN
// console.log(2 * "three") // NaN
// console.log(3 + null)      // 3
// console.log(3 + undefined) // NaN
// console.log(3 + false)     // 3
// console.log(true + true)   // 2

// console.log(false == 0);            // true
// console.log(false === 0);           // false
// console.log(null == undefined);     // true
// console.log(null === undefined);    // false
// console.log(null == 0);             // false
// console.log(null === 0);            // false
// console.log(false != 0);            // false
// console.log(false !== 0);           // true
// console.log(null != undefined);     // false
// console.log(null !== undefined);    // true
// console.log(null != 0);             // true
// console.log(null !== 0);            // true

// console.log(0 == '0');  // true
// console.log(0 == '');   // true
// console.log('' == '0'); // false!
// console.log(false == undefined) // false
// console.log(false == null)      // false
// console.log(null == undefined)  // true!



myName = "Krzysztof"

// długość ciągu znaków
myName.length

// zwraca tekst na wskazanej pozycji
myName.charAt(0)

// Zwraca prawdę lub fałsz jeżeli dany tekst znajduje się lub nie w podanej wartości
console.log(myName.includes('f'))

// true / false

// Metoda: replace(str, newStr)
console.log(myName.replace('z', 'f'))
console.log(myName.replaceAll('Krzysztof', 'Michał'))

// Metoda: split(str)
// Split zamienia String na Listę
console.log('K,r,z,y,s z,t,o,f'.split(' '))

// Metoda: slice(begin, end)

console.log(myName.slice(1, 4))

// **********************************
// Metoda: substr(begin, n)

console.log(myName.substr(1, 4))
console.log(myName.substring(1, 4))