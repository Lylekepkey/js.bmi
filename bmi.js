document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

function calculateBMI() {

    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value

    var heightInMeters = height / 100

    var bmi = weight / (heightInMeters * heightInMeters)

    var category

    if (bmi < 18.5) {
        category = "Underweight";
        } 
        else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
        } 
        else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        } 
        else {
        category = "Obese";
        }

        document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + category
}
