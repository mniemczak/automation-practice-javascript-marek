//Rozwiązanie do zadania 1a

class Klasa{
    metodaA(name){
        console.log(name);
        return name;
    }

    metodaB(name){
        const name2 = this.metodaA(name);
        
        //wylogowanie 2 pierwszych liter imienia
        console.log(name2.slice(0,2));
        
        //wylogowanie imienia z małej litery
        console.log(name2.charAt(0).toLowerCase() + name2.slice(1));

        //wylogowanie imienia z dużej litery
        console.log(name2.charAt(0).toUpperCase() + name2.slice(1));

        //wylogowanie imienia z nazwiskiem + 2 dodatkowe słowa
        console.log(`${name2}` + ` Kowalski` + ` Tester` + ` oprogramowania`);
    }
}

//Kilkukrotne wywołanie metodaA z różnymi imionami:
const klasa1 = new Klasa();
klasa1.metodaA("Krzysztof");
klasa1.metodaA("Ania");
klasa1.metodaA("Radek");

klasa1.metodaB("Marek");

//Rozwiązanie do zadania 1b

let liczba1 = 8;
let liczba2 = 40;

console.log((liczba1===50 || liczba2===50) || (liczba1+liczba2===50));

//Rozwiązanie do zadania 1c

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

for(let i=0; i<3; i++){
    console.log(`${i+1}${o[i+1]} choice is ${color[i]}.`);
}
