"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_js_1 = require("./library.js");
let studentName = "Анна";
let studentAge = 20;
let isEnrolled = true;
let middleName = null;
let hobby = undefined;
let city = "Москва";
let population = 12_000_000;
let isCapital = true;
let titleBook = "Книга";
let pages = 300;
let isReadBook = false;
let userName = null;
function formatPrice(value) {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function logMessage(message) {
    console.log(message);
}
function repeat(text, times = 2) {
    return text.repeat(times);
}
function describeUser(name, age) {
    if (age !== undefined) {
        return `${name}, возраст: ${age}`;
    }
    return name;
}
console.log(formatPrice(1234.5));
console.log(clamp(15, 0, 10));
logMessage("Привет");
console.log(repeat("abc"));
console.log(describeUser("Иван"));
console.log(describeUser("Иван", 25));
const books = [
    (0, library_js_1.createBook)("1984", "Джордж Оруэлл", 1949),
    (0, library_js_1.createBook)("Мастер и Маргарита", "Михаил Булгаков", 1967),
    (0, library_js_1.createBook)("Преступление и наказание", "Фёдор Достоевский", 1866),
];
if (books[0] && books[2]) {
    books[0] = (0, library_js_1.markAsRead)(books[0]);
    books[2] = (0, library_js_1.markAsRead)(books[2]);
}
books.forEach(book => console.log((0, library_js_1.getBookInfo)(book)));
console.log(`Прочитано книг: ${(0, library_js_1.countReadBooks)(books)}`);
