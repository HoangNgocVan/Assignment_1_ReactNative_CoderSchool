
var currentNumber = Math.floor(Math.random() + 10);
//console.log(currentNumber);
let past = document.getElementById("pastResult");
var count = 10;
function testFunction() {
    var inputNumber = document.getElementById("number").value;
    if(inputNumber == currentNumber) {
        document.getElementById("result").innerHTML = "success";
        document.getElementById("result").style.backgroundColor = "green";
        
    } else {
        count--;
        if(count == 0) {
            alert('lose');
            location.reload();
        }
        document.getElementById("result").innerHTML = "fail! You have " + count + ' left';
        document.getElementById("result").style.backgroundColor = "red";
        past.textContent += " " + inputNumber; 

    }
}

