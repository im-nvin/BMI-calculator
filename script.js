function calculate() {
    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    let result = document.querySelector('#result');

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Please provide a valid height"
    } else if (weight === "" || isNaN(weight)) {
        result.innerHTML("please provide a  valid weight")
    } else {
        let BMI = (weight / ((height * height)
            / 10000)).toFixed(2);
        // console.log(BMI)
        if (BMI < 18.6) {
            result.innerHTML = `BMI: ${BMI} , You are UnderWeight`
        } else if (BMI > 18.6 && BMI < 24.9) {
            result.innerHTML = `BMI: ${BMI} , Normal`
        } else {
            result.innerHTML = `BMI: ${BMI} , You are OverWeight`
        }
    }

}