import { createBook, markAsRead, getBookInfo, countReadBooks } from "./library.js";


let studentName: string = "Анна";
let studentAge: number = 20;
let isEnrolled: boolean = true;
let middleName: null = null;
let hobby: undefined = undefined;

let city = "Москва";
let population = 12_000_000;
let isCapital = true;


let titleBook: string = "Книга";
let pages: number = 300;        
let isReadBook: boolean = false;


let userName: string | null = null; 


function formatPrice(value: number): string {
    return value.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

function logMessage(message: string): void {
    console.log(message);
}

function repeat(text: string, times: number = 2): string {
    return text.repeat(times);
}

function describeUser(name: string, age?: number): string {
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
    createBook("1984", "Джордж Оруэлл", 1949),
    createBook("Мастер и Маргарита", "Михаил Булгаков", 1967),
    createBook("Преступление и наказание", "Фёдор Достоевский", 1866),
];

if (books[0] && books[2]) {
    books[0] = markAsRead(books[0]);
    books[2] = markAsRead(books[2]);
}

books.forEach(book => console.log(getBookInfo(book)));
console.log(`Прочитано книг: ${countReadBooks(books)}`);


/*
 ЧАСТЬ 5. АНАЛИЗ ОШИБОК КОМПИЛЯТОРА
 
 Ошибка A: Type 'string' is not assignable to type 'number'.
 Причина: Переменной типа number присваивается строка.
 Исправление: Присвоить число (count = 10) или изменить тип на number | string.
  
 Ошибка B: Expected 2 arguments, but got 1.
 Причина: Функция ожидает 2 аргумента, а передан 1.
 Исправление: Передать второй аргумент или сделать его необязательным (y: number = 0).
 
 Ошибка C: Type 'null' is not assignable to type 'string'.
 Причина: В строгом режиме (strictNullChecks) null не является частью типа string.
 Исправление: Использовать объединение типов: let name: string | null = null;
 
 Ошибка D: A function whose declared type is neither 'void' nor 'any' must return a value.
 Причина: Функция должна вернуть string, но оператор return отсутствует.
 Исправление: Добавить return "значение"; или поменять тип функции на void.
 */