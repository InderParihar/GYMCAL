ffmiCalculator = document.getElementById('ffmi-calculator');
answerField = document.getElementById('answer');

/* FFMI Calculator */

function calculateFFMI() {
    totalWeight = ffmiCalculator.elements['input-weight'].value;
    heightMeasurement = (ffmiCalculator.elements['input-height'].value)/100;
    fatPercentage = ffmiCalculator.elements['input-fat'].value;

    leanWeight = totalWeight * (1 - (fatPercentage/100));
    factorOne = leanWeight*2.20462;
    factorTwo = heightMeasurement*heightMeasurement*2.2;
    ffmi = factorOne/factorTwo;

    answerField.innerText = `Your Fat Free Mass Index is ${ffmi.toFixed(2)}`
}

ffmiCalculator.addEventListener('submit', (entered) => {
    entered.preventDefault();
    calculateFFMI();
})
