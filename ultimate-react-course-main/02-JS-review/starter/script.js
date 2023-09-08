const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: false,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

// const book = getBook(3);
// book;

// const {title,genres,author,publicationDate,hasMovieAdaptation} = book;

// const [primaryGenre , secondaryGenre,...otherGenres] = genres;

// console.log(primaryGenre,secondaryGenre,...otherGenres);

// const newGenres = ["epic fantacy",...genres];
// newGenres;

// const updateBook =  {...book,publicationDate: "2001-12-1",pages:1202};
// updateBook;

// function getTotalReviewCout(book){

//   const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
//   const librarythings = book.reviews?.librarything?.reviewsCount ?? 0;

//   return goodReads+librarythings;
// }
// console.log(getTotalReviewCout(book));

/*
function getTotalReviewCout(book) {
    const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
    const librarythings = book.reviews?.librarything?.reviewsCount ?? 0;

    return goodReads + librarythings;
}

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const eachBook = books.map((book) => book);
const eachTitle = books.map((book) => book.title);

console.log(eachTitle);

const essentialDetail = books.map((book) => ({
    title: book.title,
    arthor: book.author,
    getTotalReviewCout: getTotalReviewCout(book),
}));

essentialDetail;

const longBook = books
    .filter((book) => book.pages > 500)
    .filter((book) => book.hasMovieAdaptation);

longBook;

const pagesOfAllBook = books.reduce((acc, book) => acc + book.pages, 0);

pagesOfAllBook;

const arr = [3, 9, 5, 7, 1, 8, 2];
const soted = arr.sort((a, b) => b - a);
soted;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

const newBook = {
    id: 6,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
};

// add
const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// delete
const bookAfterDelete = books.filter((book) => book.id !== 3);
bookAfterDelete;

// update
const bookAfterUpdate = bookAfterDelete.map((book) =>
    book.id == 1 ? { ...book, pages: 1210 } : book
);
bookAfterUpdate;

*/

// fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json()).then((data)=> console.log(data));

// console.log("Jons ");

async function getToDo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);
}

getToDo();

console.log("hasa");
