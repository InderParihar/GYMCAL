ormCalculator = document.getElementById('orm-calculator');
answerField = document.getElementById('answer');

/* FFMI Calculator */

function calculateORM() {
    totalWeight = ormCalculator.elements['input-weight'].value;
    givenReps = ormCalculator.elements['input-reps'].value;
    orm = (totalWeight/(1.0278 - 0.0278 * givenReps)).toFixed(2);
    answerField.innerText = `Your weight for one repetition at maxiumum will be ${orm}KG.`;
}

ormCalculator.addEventListener('submit', (entered) => {
    entered.preventDefault();
    calculateORM();
})
