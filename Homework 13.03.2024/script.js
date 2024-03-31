// Задание 1

let d = 7;
console.log(d);
console.log(d*d);
console.log(d*d*d);

// Задание 2



 let num1 = +prompt("Введите число:");
 let num2 = +prompt("Введите второе число:");
 let sum = num1 + num2;

if (num1 > num2) {
    console.log("Сумма чисел:" + sum );
    } else if (num1 < num2) {
    console.log(`Произведение чисел: ${(num1) * (num2)}`);
    } else 
    console.log('Числа одинаковые');

    // Задание 3

 
var number4 = +prompt("Введите целое число:");


if (number4 > 0) {
   
    var cube = number4 * number4 * number4;
    console.log("Куб числа " + number4 + " равен " + cube);
} else {
    console.log("Число не положительное.");
}

  // Задание 4


var studentsCount = +prompt ("Введите количество учеников в классе:");
var chairsCount = +prompt ("Введите количество стульев в кабинете:");

if (studentsCount <= chairsCount) {
    console.log("Стульев хватает.");
} else {
    console.log("Стульев не хватает.");
}


//Задача 5


for (var i = 1; i <= 9; i++) {
    console.log(i);
}


//Задача 6

// Заданный масси
let numbers = [10, 20, 5, 15, 25, 30];


for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 15) {
        console.log(numbers[i]);
    }
}


// Задача 7

// Заданный массив чисел
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Цикл для вывода нечетных чисел
for (var i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 !== 0) {
        console.log(numbers1[i]);
    }
}


// Задача 8

let value = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Цикл для вывода значений с индексами, кратными трём
for (var i = 0; i < value.length; i++) {
    if (i % 3 === 0) {
        console.log(value[i]);
    }
}

// Задача 9

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumOfnumbers = 0;
//Нахождение суммы нечетных чисел
for (var i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 !== 0) {
        sumOfnumbers += numbers2[i];
    }
}
//Сумма нечетных чисел
console.log("Сумма нечетных чисел: " + sumOfnumbers);


// Задача 10

// Заданный массив чисел
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumEvenNumbers = 0;
let sumOddNumbers = 0;

// Цикл для нахождения суммы четных и нечетных чисел
for (var i = 0; i < numbers3.length; i++) {
    if (numbers3[i] % 2 === 0) {
        sumEvenNumbers += numbers3[i];
    } else {
        sumOddNumbers += numbers3[i];
    }
}

// Нахождение разницы между суммами четных и нечетных чисел
let difference = Math.abs(sumEvenNumbers - sumOddNumbers);

// Вывод разницы между суммами в консоль
console.log("Разница между суммой четных и нечетных чисел: " + difference);


