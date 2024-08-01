// 1. get the value of the first element in an array that has value greater than 20

let array = [21, 3, 1, 45, 76, 56];
const find = array.find((ele, i, arr) => {
    return (ele > 20);

});
console.log(find + " is the first element in an array that has value greater than 20");


// 2. get the value of the first element in an array that has value less than 20

let find2 = array.find((ele, i, arr) => ele < 20);
console.log(find2 + " is the first element in an array that has value lesser than 20");

// 3. filter data based on a id(property) in an array of objects: pick any random id value

let arr = [
    {
        firstName: 'Nikhitha',
        id: 1,
        age: 24
    }, {
        firstName: 'Harshi',
        id: 2,
        age: 21,
    }, {
        firstName: 'Divya',
        id: 74,
        age: 22
    }
    , {
        firstName: 'Premchand',
        id: 5,
        age: 24
    }
];

let filter = arr.filter((ele, i, arr) => ele.id == 74);
console.log(filter);


// 4. check element is odd or even in an array [90, 89, 56, 45]

let array3 = [90, 89, 56, 45];
let map = array3.map((ele, i, arr) => (ele % 2 == 0) ? "even" : "odd");
console.log(map);

// 5. create a class Book: type_of_book(), no. of pages, type of pages, author

class Book {
    constructor(Noofpages, typesofpages, author) {
        this.Noofpages = Noofpages;
        this.typesofpages = typesofpages;
        this.author = author;

    }
    type_of_book(bookType) {
        return "the type of book is " + bookType;

    }
}
const books = new Book(20, 2, "charlie");
console.log(books);
console.log(books.type_of_book("suspense and thriller"));

// 6. create a class Animal: walk(), eat(), climb(), gender, name, disease

class Animal {
    constructor(name, gender, disease) {
        this.name = name;
        this.gender = gender;
        this.disease = disease;
    }

    walk(walk) {
        return  "this animal can " + walk;
    }

    eat(food) {
        return "this animal can eat " + food;
    }

    climb(climb) {
        return "this animal can " + climb;
    }
}

const animal1 = new Animal("Leo", "Male", "Flu");
console.log(animal1)

console.log(animal1.name  +  " have " + animal1.disease + " disease");
console.log(animal1.walk("walk"));
console.log(animal1.eat("meat"));
console.log(animal1.climb("not climb"));


