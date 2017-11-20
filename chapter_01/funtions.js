/**
 * Created by John Carter on 7/5/2017.
 */

function addNumber(number1,number2) {
    var result = number1 + number2;
    document.write("ผลลัพท์ " + result + "<br>");
}

function runsData() {
    document.write("Hallo Word"+ "<br>");
}

function showMessage(mge) {
    return "Hello " + mge;
}

runsData();
addNumber(10,20);
addNumber(10,5);

document.write(showMessage("John")+ "<br>");

var mge = showMessage("Jack");

document.write(mge);