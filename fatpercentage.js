fatPercentageCalculator = document.getElementById('fat-percentage-cal');
answerField = document.getElementById('answer');

/* Fat Percentage Calculator */

function calculateFatPercentage() {
    totalWeight = (fatPercentageCalculator.elements['input-weight'].value)*2.202;
    waistMeasurement = (fatPercentageCalculator.elements['input-waist'].value);
    factorOne = (totalWeight*1.082)+94.42;
    factorTwo = waistMeasurement * 4.15;
    leanBodyMass = factorOne - factorTwo;
    bodyFatWeight = totalWeight - leanBodyMass;
    fatPercentage = bodyFatWeight*100/totalWeight;

    answerField.innerText = `Your fat percentage is : ${fatPercentage.toFixed(2)}%.
    You have ${(leanBodyMass/2.202).toFixed(2)} KG of Lean Body Mass.
    Your body holds ${(bodyFatWeight/2.202).toFixed(2)} KG of Fat.`
}

fatPercentageCalculator.addEventListener('submit', (entered) => {
    entered.preventDefault();
    calculateFatPercentage();
})
