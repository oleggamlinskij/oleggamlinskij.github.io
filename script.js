const result = document.getElementById("result");

function getButton(number) {
  return document.getElementById(number);
}

function panel(number, num) {
  getButton(number).onclick = function () {
    if (result.innerHTML == "0") {
      result.innerHTML = num;
      Update();
    } else {
      result.innerHTML = result.innerHTML + num;
      Update();
    }
  };
}
panel("zero", 0);
panel("one", 1);
panel("two", 2);
panel("three", 3);
panel("four", 4);
panel("five", 5);
panel("six", 6);
panel("seven", 7);
panel("eight", 8);
panel("nine", 9);

function Update() {
  if (String(result.innerHTML).length >= 13) {
    result.innerHTML = result.innerHTML.substring(
      0,
      result.innerHTML.length - 1
    );
  }
}

function clearRowOnNextInput() {
  result.innerHTML = "0";
}

var num1 = 0;
var num2 = 0;
var operation = "nothing";

document.getElementById("plus").onclick = function(){
    num1 = result.innerHTML;
    operation = "adding"
    clearRowOnNextInput();
}

document.getElementById("minus").onclick = function(){
    num1 = result.innerHTML;
    operation = "subtraction";
    clearRowOnNextInput();
}

document.getElementById("multiply").onclick = function(){
    num1 = result.innerHTML;
    operation = "multiplying";
    clearRowOnNextInput();
}

document.getElementById("divide").onclick = function(){
    num1 = result.innerHTML;
    operation = "division";
    clearRowOnNextInput();
}

document.getElementById("equals").onclick = function(){
    num2 = result.innerHTML;
    if (operation == "adding"){
        var addingresult = (Number(num1)+Number(num2));
        result.innerHTML = addingresult;
    }
    else if(operation == "subtraction"){
        var addingresult = (Number(num1)-Number(num2));
        result.innerHTML = addingresult;
    }
    else if (operation == "multiplying"){
        var addingresult = (Number(num1)*Number(num2));
        result.innerHTML = addingresult;
    }
    else if(operation == "division"){
        var addingresult = (Number(num1)/Number(num2));
        result.innerHTML = addingresult;
    }
    else{
        console.log("Pidaras")
    }
    num1 = 0;
    num2 = 0;
    operation = "nothing";
}

document.getElementById("clear-button").onclick = function (){
    result.innerHTML = "0"
    num1 = 0;
    num2 = 0;
    operation = "nothing";
}