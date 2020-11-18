calorieCalculator = document.getElementById('calorie-calculator');
answerField = document.getElementById('answer');

/* Calorie Calculator */
function calculateCalorieReq() {
    totalWeight = calorieCalculator.elements['input-weight'].value;
    heightMeasurement = calorieCalculator.elements['input-height'].value;
    age = calorieCalculator.elements['age'].value;
    gender = calorieCalculator.elements['gender'].value;
    activityLevels = calorieCalculator.elements['activity-levels'].value;

    if (gender === 'male') {
        calorieReq = (activityLevels * (15.3 * (totalWeight) + 679)).toFixed(2);
    } else {
        calorieReq = (activityLevels * (14.7 * (totalWeight) + 496)).toFixed(2);
    }

    proteinReq = ((calorieReq*30/100)/4).toFixed(2);
    carbsReq = ((calorieReq*45/100)/4).toFixed(2);
    fatsReq = ((calorieReq*25/100)/9).toFixed(2);

    answerField.innerText = `You need to eat ${calorieReq} calories to maintain your weight.
    Ideal protein intake is ${proteinReq} grams.
    Ideal carbohydrate intake is ${carbsReq} grams.
    Ideal fat intake is ${fatsReq} grams.
    `
}


calorieCalculator.addEventListener('submit', (entered) => {
    entered.preventDefault();
    calculateCalorieReq();
})
