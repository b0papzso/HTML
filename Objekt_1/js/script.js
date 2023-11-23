let person = {firstName: "John", lastName: "Smith"};

console.log(person);

person.firstName = "Paul";
console.log(person);
delete person.firstName;
console.log(person);
