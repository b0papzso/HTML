let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand, model, year, color] = car;

console.log(brand)
console.log(model)
console.log(year)
console.log(color)

//1. kérdés: Bármilyen változónevet lehet használni, fontos a sorrend, ha rossz sorrendbe írjuk, más lesz a változó értéke mint amit szeretnénk.

let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };

let {bookTitle, bookAuthor, publicationYear, language} = book;

console.log(bookTitle)
console.log(bookAuthor)
console.log(publicationYear)
console.log(language)

//2. kérdés: Nem lehet bármilyen nevet használni, csak azt, amit az objektumban megadtunk, sorrendjuk megint számít, rossz sorrend esetén nem lesz megfelelő érték.


let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

function printStudentInfo({name, age, grade, subjects}){
        console.log(name +"," + age + " , Osztály: " + grade + ", Tantárgyai: ")
        subjects.forEach(element => {            
            console.log(element)});

    }

printStudentInfo(student);
