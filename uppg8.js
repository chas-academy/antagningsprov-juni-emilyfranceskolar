

function uppg8([]){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
 const persons = [
     {name: "Jamie", age: 33},
     {name: "Johanna", age: 35},
     {name: "Olivia", age: 29},
     {name: "Miles", age: 16},
     {name: "Cecilia", age: 31},
];
for (let person of persons){
    if (person.age > 30){
        console.log(person.name);
    }
}

}

uppg8([]);
module.exports = { uppg8 };