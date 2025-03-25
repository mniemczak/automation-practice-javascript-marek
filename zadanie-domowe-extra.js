//Zadanie 1.1

class User{
    constructor(name, phoneNumber, email, age, address){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
        this.address = address;
    }
   
    // Metoda obliczająca wiek w miesiącach
    calculateAgeInMonths() {
        const years = this.age;
        const months = years * 12;
        console.log(`${this.name} ma ${years} lat, co odpowiada ${months} miesiącom.`);
}

    // Metoda sprawdzająca wiek użytkownika
    checkAge() {
        if (this.age >= 18) {
            console.log(`${this.name} jest pełnoletni.`);
        } else {
            console.log(`${this.name} nie jest pełnoletni.`);
        }
    }

    // Metoda logująca wszystkie dane użytkownika
    displayFullInfo() {
        console.log(`Imię: ${this.name}, Numer telefonu: ${this.phoneNumber}, E-mail: ${this.email}, Wiek: ${this.age}, Adres: ${this.address}`);
    }
}

class BasicUser extends User {
    constructor() {
        super("Jan Kowalski", "123456789", "jan@gmail.com", 25, "Warszawa");
    }

    // Metoda wykorzystująca metody z klasy bazowej
    getUserData() {
        this.calculateAgeInMonths();
        this.checkAge();
        this.displayFullInfo();
    }
}

class CartUser extends User {
    constructor() {
        super("Anna Nowak", "987654321", "anna@gmail.com", 30, "Kraków");
    }

    // Metoda wykorzystująca metody z klasy bazowej
    getUserData() {
        this.calculateAgeInMonths();
        this.checkAge();
        this.displayFullInfo();
    }
}

const basicUser = new BasicUser();
basicUser.getUserData();

const cartUser = new CartUser();
cartUser.getUserData();

//Zadanie 1.2

// Tworzenie obiektu 'library'
const library = {
    book1: {
        Tytuł: ['Władca Pierścieni'],
        Autor: ['J.R.R. Tolkien'],
        'Data wydania': ['29 lipca 1954'],
        'Ilość stron': ['1178']
    },
    book2: {
        Tytuł: ['Harry Potter i Kamień Filozoficzny'],
        Autor: ['J.K. Rowling'],
        'Data wydania': ['26 czerwca 1997'],
        'Ilość stron': ['223']
    },
    book3: {
        Tytuł: ['Zbrodnia i kara'],
        Autor: ['Fiodor Dostojewski'],
        'Data wydania': ['1866'],
        'Ilość stron': ['671']
    }
};

for (const bookKey in library) {
    console.log(`Książka: ${bookKey}`);
    console.log(`Tytuł: ${library[bookKey].Tytuł[0]}`);
    console.log(`Autor: ${library[bookKey].Autor[0]}`);
    console.log(`Data wydania: ${library[bookKey]['Data wydania'][0]}`);
    console.log(`Ilość stron: ${library[bookKey]['Ilość stron'][0]}`);
    console.log('');
}
