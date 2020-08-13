function start() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = weight / (height * height);
    if (bmi < 18.5)
        document.getElementById("result").innerHTML = "Result: Underweight";
    else if (bmi < 25)
             document.getElementById("result").innerHTML = "Result: Normal";
        else if (bmi < 30)
                document.getElementById("result").innerHTML = "Result: Overweight";
             else document.getElementById("result").innerHTML = "Result: Obese";
}