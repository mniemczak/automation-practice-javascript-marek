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