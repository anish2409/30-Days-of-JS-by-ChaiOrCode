//Object creation and Access
const book={
    title:"Himu",
    author:"Humayun Ahmed",
    year:2024
}
console.log(book);
console.log(book["title"]);
//Object Methods
book.getDetails=function(){
    return `${this.title} by ${this.author}`;
};
console.log(book.getDetails());

book.updateYear = function(newYear){
    this.year = newYear;
}
book.updateYear(2023);
console.log(book);

//Nested Objects

let libary ={
    name: "Kalyani Libary",
    books: [
        {title : "Gitanjali", author : "Rabindranath Tagore" , year : 2024},
        {title:"Pother Dabi" ,author:"Bomkim chandra Chattapaddhay",year:2020}
    ]
};
console.log(libary);

console.log("Libary Name:",libary.name);
libary.books.forEach(book=>{
    console.log("Book Title:",book.title);
});

//this keyword
let newbook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`;
    }
};
console.log(newbook.getTitleAndYear());

//Object Iteration
//Use a for..in loop  to iterate over the book object and log each property and its value.
const libary1={
    name:"Author",
    books:[
        {
            title:"Gitanjali",
            author:"Rabindranath Tagore",
            year:1978,
        },
        {
            title:"Pother Dabi" ,
            author:"Bomkim chandra Chattapaddhay",
            year:2020,
        },
    ],
};
for(const property in libary1.books[1]){
    console.log(`${property}: ${libary1.books[1][property]}`);
}
// Use Object.keys and Object.values methods to log all the keys and values of the book object
console.log(Object.keys(libary1.books[1]));
console.log(Object.values(libary1.books[1]));