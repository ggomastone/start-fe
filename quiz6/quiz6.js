function guguResult() {
    var guguInput = document.getElementById('input').value;
    var temp = "";
    var result = "";
    for (i = 0; i < 10; i++) {
        result = guguInput * i;
        temp += guguInput + "X" + i + "=" + result + "<br/>";
    }
    document.getElementById('result').innerHTML = temp;
}