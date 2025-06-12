function kiemTra(){
    let cN = parseInt(document.getElementById("canNang").value);
    let cC = parseInt(document.getElementById("chieuCao").value);
    let bmi= cN / (Math.pow(cC,2));
    let result = '';
    if (bmi < 18.5) {
        result = "Underweight"
    } else if (bmi < 25.0) {
        result = "Normal"
    } else if (bmi < 30.0) {
        result = "Overweight"
    } else {
        result = "Obese"
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result;

}