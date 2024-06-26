		
		
// 	// Nauka języka JS
	
// 	// let const var

// 	let myCar
	
// 	// console.log()
	

// 	const myCarAge = ""
	
// 	let myCarNewAge = myCarAge.replace("", "Moje auto ma 27 lat")

// 	let myName = "Krzysztof"
// 	const age = [40]
// 	var number = "Krzysiek"
// 	var number = 2
// 	var number = ()=> {}
// 	var number = "Krzysiek"
// 	var number = 65
// 	var number = []
// 	var number = 5654645
// 	var number = "546545646546456"
// 	var number = {}
	
// 	let newAge = age[0] = 2
// 	let myNewName = myName.replace("Krzysztof", "Krzysztof ma 40 lat")
// 	let myNewName1 = myName.replaceAll("z", "40")
	
	
// 	myCar = "Opel Astra"
	
// 	//int number1 = 87;
	
// 	//console.log('Krzysztof'.length)
	
// 	//console.log('Krzysztof'.charAt(8))
// //console.log('Krzysztof'.indexOf('f'))
	
// 	// Metoda: slice(begin, end)

//  //console.log('Krzysztof'.slice(1, 2))

// // **********************************
// // Metoda: substr(begin, n)

//  //console.log('Krzysztof'.substr(1, 2))
 
//  //console.log('K,r,z,y,s z,t,o,f'.split(' '))
 
//  //console.log('Krzysztof'.includes('tof'))
 
 
//  //console.log('Ala' + 'ma' + 'kota')
 
//  let url = 'http://mojastrona.pl?text=Uczę się stringów w Javascript';
 
//  let url1 = url.slice(0, 30)
//  let url2 = url.slice(31, 34)
//  let url3 = url.slice(36, 43)
 
// //console.log(url1 + url2 + url3)

// //console.log(url.split(" ").join(""))

// //console.log(url.split(" ")[0] + url.split(" ")[1] + url.split(" ")[2] + url.split(" ")[3] + url.split(" ")[4])


// // Array / LISTY
// // let a = Array('Maria Z', 'Janusz G')
// let osoby = [
// 	'Jan Kowalski',
// 	['Adam Nowak', [['Maria Z', 'Janusz G']]],
// 	'Maria Z',
// 	'Janusz G',
// 	[[['Maria Z','Jan Kowalski', 'Janusz G'],2, 55]],
// 	'Marcin J',
// 	[1,2,[2,67],"Krzysiek",[["Jestem tutaj"]]]
// ];


// //console.log(osoby[1][0])

// delete osoby[0]



// osoby[0] = "Krzysztof Kołodziejczyk"


// osoby[osoby.indexOf('Jan Kowalski')]

// // console.log(osoby[1][osoby.indexOf('Jan Kowalski'))


//  //osoby.forEach(
//  // (value, index, array) => {
	  
//    // console.log(array);


	
//  //}
//  //);
 
//  // METODA: slice(begin, end)

//  console.log(osoby.slice(1,2))

// // **************************************************************************

// // Wpływa na tablicę początkową
// // METODA: splice(begin, n)

//  let arr = osoby.splice(1, 2)

//  console.log(arr)
//  console.log(osoby)
 
 
//  let users = [
//  ["Krzysztof K", "Maria Z", "Marek G"],
//  [769698687079, 45365654,54645645645],
//  [3,67,987]
//  ]
 
 
 
//  // OBIEKTY
 
//  /**
 
//  */
//   let obj = {

//      names: ["Krzysztof K", "Maria Z", "Marek G"],
//      "pesel 1": [769698687079, 45365654,54645645645],
// 	 "pesel 2": [769698687079, 45365654,54645645645],
// 	 products: [3,67,987],
// 	 myNewUserFun: () => {
	  
//  }
	 
	 
	 
	 
//  }
 
//  // Odwołanie do klucza w obiekcie
//  obj.names
//  obj["pesel"]
//  obj.products
 
 
//  // Dodanie nowej pozycji
//  //obj.users = ["Marcin J"] 
//  obj["users 1"] = ["Marcin J"]
//  obj["users 2"] = ["Marcin J"]
 
//  // Usuwanie elementów z obiektu
 
//  delete obj.names
 
 
//  // Edycja elementu obiektu
 
//  obj.names = ["Krzysztof K", "Maria Z", "Marek G", "Kasia K"]
 
//  // Dodaj nowy obiekt o nazwie library
//  // Obiekt powinien zawierać 3 klucze książki
//  // Każdy klucz książki powinien mieć wartość nowego obiektu
//  // Nowy obiekt powinien zawierać jeden klucz o nazwie: title
//  // klucz title powinien mieć wartość ciągu znaków (String) z przykładowym tytułem
 
 
 
// //  const library = {
// // 	book1:{
// // 		title: "Czarny kot"
// // 	},
// // 	book2:{
// // 		title: "Lestat"
// // 	},
// // 	book3:{
// // 		title: "Wywiad z wampirem"
// // 	}
// //  }	 
 
 
 
 
// //  function myFun (myName) {
// // 	  console.log(myName)
// //  }
 
 
// //  myFun("Krzysiek")
// //  myFun("Marek")
// //  myFun("Kasia")
 
 
// //  let myNewFun = () => {
// // 	  return {
		  
// // 		  book1: {
// // 			  title: "Jakiś tytuł"
// // 		  }
// // 	  }
// //  }
 
 
// //  myNewFun()
 
 
 
// //  let func1 = x => x * x
 
 
// //  console.log(func1(2))
// //  console.log(func1(5))
// //  console.log(func1(67))
 
// //  let login = (login = '', pass = "", loginSelector, passSelector) => {
	 
// //  }
 
// //  login('wiking123@o2.pl',"coś123")
// //  login('wiking123@o2.pl',"coś123", "selectorLogin", "selectorPass")
// //  login("krzysiek246", "974643907957034)&(&)((&_)", "selectorLogin", "PassSelector")

// //  login()


