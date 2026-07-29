const books = [
    {
        title: "The Old Guard",
        description: "A thrilling fiction story about immortal warriors.",
        numberOfPages: 223,
        authour: "Greg Rucka",
        reading: true
    },
    {
        title: "Dune",
        description: "An epic sci-fi novel set on the desert planet Arrakis.",
        numberOfPages: 412,
        authour: "Frank Herbert",
        reading: false
    },
    {
        title: "Atomic Habits",
        description: "A practical guide on how small changes lead to remarkable results.",
        numberOfPages: 320,
        authour: "James Clear",
        reading: true
    },
    {
        title: "1984",
        description: "A dystopian novel examining surveillance and totalitarianism.",
        numberOfPages: 328,
        authour: "George Orwell",
        reading: false
    }
];

for (let i = 0; i < books.length; i++) {
    if (books[i].reading === true) {
        console.log(books[i]);
    }
}