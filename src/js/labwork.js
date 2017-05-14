/*Write code to create an array of 5 Cars
- Cars has following properties:
    - FirmName (string);
    - ModelName (string);
    - EngineDisplacement (float);
- All parameters to prompt by user

Output all Cars that has Engine Displacement > 2.0*/

var arr = [];

for (var counter = 1; counter <= 5; counter++) {
    var car = {};
    car["Firm Name"] = prompt("Enter firm name of the " + counter + " car:");
    car["Model Name"] = prompt("Enter model name of the " + counter + " car:");
    car["Engine Displacement"] = parseFloat(prompt("Enter engine displacement of the " + counter + " car:"));

    arr.push(car);
}

for (var counter2 = 0; counter2 < 5; counter2++) {
    if (arr[counter2]["Engine Displacement"] > 2.0) {
        console.log("Car №" + (counter2 + 1) + ": " + arr[counter2]["Engine Displacement"]);
    }
}