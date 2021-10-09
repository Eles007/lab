function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity()) {
        document.getElementById("id2").innerHTML = "Правильно!";
    }
    else
        document.getElementById("id2").innerHTML = "Неправильно!";
}