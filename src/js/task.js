/*Написати програму, яка в циклі питає в користувача
назву властивості і її значення і заповнити цим об'єкт.
Після кожної пари ключ-значення запитатись в користувача
чи він хоче ще щось добавити (confirm).
Після цього запустити цикл, в якому виведете всі властивості
цього обєкта в такому форматі - propName=propValue в консоль*/

var arr = [];

do {
    var prop = {};

    prop["Name"] = prompt("Enter the name of property:");
    prop["Value"] = prompt("Enter the value of property:");

    arr.push(prop);

    var ask = confirm("Do you wanna add one more property?");
} while (ask);

for (var counter = 0; counter < arr.length; counter++) {
    console.log(arr[counter]["Name"] + " = " + arr[counter]["Value"]);
}
