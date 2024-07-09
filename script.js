function bmiCalculator() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {

        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    document.getElementById('result').textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    console.log(bmi);

   
    let weightLevel;

    if ( bmi < 18.5) {
        weightLevel = 'Underweight';
        color = 'blue';
    } else if (bmi < 24.9) {
        weightLevel = 'Normal weight';
        color = 'Green';
    } else if (bmi < 30) {
        weightLevel = 'Overweight';
        color = 'red';
    } else {
        weightLevel = 'Obese';
        color = 'Magenta';
    }

    const weightLevelOutput = document.getElementById('weight-level');
    weightLevelOutput.textContent = `Weight Level: ${weightLevel}`;
    weightLevelOutput.style.color = color;
}
