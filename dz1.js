let name1 = prompt("як тебе звати?");
alert("привіт, " + name1);
//
const currentYear = 2025;
let birthYear = prompt("вкажи свій рік народження");
let age = currentYear - birthYear;
alert("тобі " + age + " років")
//
let side = prompt("введи довжину сторони квадрата")
let perimetr = 4 * side
alert("периметр квадрата: " + perimetr)
//
let radius = prompt("введи радіус кола");
let area = Math.PI * radius * radius;
alert("площа кола: " + area);
//
let distance = prompt("вкажи відстань між містами в км");
let hours = prompt("за скільки годин хочеш доїхати?");
let speed = distance / hours;
alert("тобі треба рухатись зі швидкістю " + speed + " км/год");
//
const rate = 0.93;
let dollars = prompt("введи кількість доларів");
let euros = dollars * rate;
alert("це буде " + euros + " євро")
//
let gb = prompt("вкажи обсяг флешки в гб");
let mb = gb * 1024;
let files = Math.floor(mb / 820);
alert("на флешку поміститься " + files + "  файлів по 820 мб");
//
let money = prompt("веди скільки грошей у тебе в гаманці");
let chocoPrice = prompt("скільки коштує одна шоколадка");
let chocoCount = Math.floor(money / chocoPrice);
let change = money % chocoPrice;
alert("ти можеш купити " + chocoCount + " шоколадок, залишиться " + change + " грн")
//
let num = prompt("введи тризначне число");
let reversed = num % 10 * 100 + Math.floor(num / 10) % 10 * 10 + Math.floor(num / 100);
alert("перевернуте число: " + reversed);
//
let number = prompt("вди ціле число");
alert((number % 2 === 0) && "число парне" || "число непарне")