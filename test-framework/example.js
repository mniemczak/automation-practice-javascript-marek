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

"Krzysztof jest trenerem".toLowerCase() === "krzysztof jest trenerem"
myName.toLowerCase()
myName.toUpperCase()


// Wyodrębnij z podanego tekstu tylko słowo koty
let text = 'Ala ma fajne koty'

console.log(text.substring(13, 17))
console.log(text.substring(13))


text = "Ala ma fajne koty i psy"





// LISTY

// [] // Array()

// liczba 1 znajduje się na indeksie 0
let list = [1,2,[
    "Krzysztof", "Marek"
],3,4,5, "Marianna"]
// dodawanie na koniec 
list.push(33)

// usuwanie na końcu
list.pop()

// dodaje na początku
list.unshift() // usuwanie shift()

// Edycja konkretnej pozycji na liście
// list[2] = "3"
console.log(list[2][1])

let osoby = [
	'Jan Kowalski',//index 0
	['Adam Nowak', [['Maria Z', 'Janusz G']]],//index 1
	'Maria Z',//index 2
	'Janusz G',//index 3
	[[['Maria Z', 'Janusz G']]],//index 4
    [['Maria Z', 'Janusz G'], ['342423432', 3242423432], [324234234, 32432432]],//index 5
	'Marcin J',//index 6
];
console.log(osoby[1][1][0][0])

console.log(osoby[4][0])


list.length

//  Sprawdzenie czy dana lista zawiera element / true lub false
list.includes(2)

// zwraca nam index na którym znajduje się pozycja
// 6 index
list[list.indexOf("Marianna")]



// OBIEKTY

// {}

let obj = {
    key1: 2,
    'key 2': "Krzysztof",
    userNames: [],
    usersId: [],
    nip: [324234234, 32432432],
    "myNum": 3,
    keyFun: () =>{},
    keyFun_1: function() {}
}

obj.key1
obj.nip[0]
obj['key 2']

// Przygotuj obiekt biblioteki
// która zawiera 3 książki, Każda książka powinna posiadać wartość obiektu
// w którym znajdują się 3 klucze: tytuł, ilość stron, autor
// Wyloguj w konsoli informacje dla jednej książki bez logowania nawiasów

let library = {
    book1: {
        "title": ["Kruk"],
        'number of pages': 15,
        author: "EDGAR ALAN POE"
    },
    book2: {
        title: "Czarny kot",
        'number of pages': 90,
        author: "Edgar.A.Poe"
    },
    book3: {
        title: "Gra o tron",
        'number of pages': 566,
        author: "George RR. Martin"
    }
}

console.log(library.book1.title[0] + '\n' + library.book1['number of pages'] + '\n' + library.book1.author)

console.log(`Pierwsza książka to: ${ibrary.book1.title[0]}\nJej ilość stron to: ${library.book1['number of pages']}\nJej autorem jest: library.book1.author`)


// Zwrócimy listę z nazwami kluczy w obiekcie book1
Object.keys(library.book1)

// Zwrócimy wartości dla kluczy w danym obiekcie
Object.values(library.book1)