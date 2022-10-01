var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfy');

form.addEventListener('submit', function(event) {
    if (!numField1.value || !numField2.value) {
        alert("please enter value in the field");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        var result = x / y;
        var percent = result * 100;

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();

    }
});