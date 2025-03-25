class User{
    constructor(name, phoneNumber, email, age, address){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    // Metoda logująca dane użytkownika
    logUserData() {
        console.log(`Imię: ${this.name}, Numer telefonu: ${this.phoneNumber}, E-mail: ${this.email}`);
    }

    // Metoda sprawdzająca wiek użytkownika
    checkAge() {
        if (this.age >= 18) {
            console.log(`${this.name} jest pełnoletni.`);
        } else {
            console.log(`${this.name} nie jest pełnoletni.`);
        }
    }

    // Metoda wykorzystująca wiele elementów z konstruktora
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
        this.logUserData();
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
        this.logUserData();
        this.checkAge();
        this.displayFullInfo();
    }
}

const basicUser = new BasicUser();
basicUser.getUserData();

const cartUser = new CartUser();
cartUser.getUserData();
