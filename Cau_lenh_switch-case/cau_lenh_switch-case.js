function dayOfMonth() {
    let month =parseInt(document.getElementById("month").value);
    let day;
    switch (month){
        case 2:
            document.getElementById("result").innerHTML= "Tháng "+month+" có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML= "Tháng "+month+" có 30 ngày";
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML= "Tháng "+month+" có 31 ngày";
            break;
        default:
            document.getElementById("result").innerHTML= "Error!";

    }
}