const englishOption = document.querySelector('#englishType');
const metricOption = document.querySelector('#metricType');
const bmiControlsView = document.querySelector('#bmiControls');
const btnAction = document.querySelector('#btnAction');
const bmiResult = document.querySelector('#bmiResult');

let IsEnglishOption;

const englishSide = `<div class="frm d-grid d-grid--tempColumns">
        <div class="frm-section d-flex justify-content__center flex-direction__column">
            <label for="feets">Feets</label>
            <input type="number" name="feets" id="feetsInput" min="0" max="10" placeholder="Feets">
        </div>
        <div class="frm-section d-flex justify-content__center flex-direction__column">
            <label for="inches">Inches</label>
            <input type="number" name="inches" id="inchesInput" min="0"  max="10" placeholder="Inches">
        </div>
    </div>
    <div class="frm d-flex flex-direction__column">
        <div class="frm-section d-flex justify-content__center flex-direction__column w50">
            <label for="pound">Pounds</label>
            <input type="number" name="pound" id="poundInput" min="0" max="500" placeholder="Pounds">
        </div>
    </div>`;

const metricSide = `
    <div class="frm d-grid d-grid--tempColumns">
        <div class="frm-section d-flex justify-content__center flex-direction__column">
            <label for="height">Height</label>
            <input type="number" name="height" id="heightInput" min="0" max="400" placeholder="Centimeter">
        </div>
        <div class="frm-section d-flex justify-content__center flex-direction__column">
            <label for="kilograms">Kilograms</label>
            <input type="number" name="kilograms" id="kilogramsInput" min="0"  max="450" placeholder="Kilograms">
        </div>
    </div>`;

const changeView = () => {
    bmiControlsView.innerHTML = IsEnglishOption ? englishSide : metricSide;
}

const initialEvents = () => {
    console.log('OK');
    IsEnglishOption = englishOption.checked;
    changeView();
};

const calculateEnglishType = () => {
    const feetsInput = document.querySelector('#feetsInput');
    const inchesInput = document.querySelector('#inchesInput');
    const poundInput = document.querySelector('#poundInput');
    let height = (parseFloat(feetsInput.value) + (parseFloat('0.' + inchesInput.value)));
    height = height * 12;
    let weight = parseInt(poundInput.value);
    let result = weight / Math.pow(height, 2) * 703;
    return result.toFixed(2);
}

const calculateMetricType = () => {
    const heightInput = document.querySelector('#heightInput');
    const kilogramsInput = document.querySelector('#kilogramsInput');
    let height = heightInput.value / 100;
    let weight = parseInt(kilogramsInput.value);
    let result = weight / Math.pow(height.toFixed(2), 2);
    return result.toFixed(2);
}

const checkBMI = (bmi) => {
    let result = '';
    if (bmi < 18.5) {
        result = 'Underweight';
    }
    if (bmi > 18.5 && bmi < 24.9) {
        result = 'Normal';
    }
    if (bmi > 25.0 && bmi < 29.9) {
        result = 'Overweight';
    }
    if (bmi > 30) {
        result = 'Obese';
    }
    return result;
}

englishOption.addEventListener('click', () => {
    IsEnglishOption = englishOption.checked;
    changeView();
});

metricOption.addEventListener('click', () => {
    IsEnglishOption = englishOption.checked;
    changeView();
});

btnAction.addEventListener('click', () => {
    let result = IsEnglishOption ? calculateEnglishType() : calculateMetricType();
    let weightStatus = checkBMI(result);
    bmiResult.innerHTML = `Your BMI is <strong>${result}</strong>, indicating your weight is in the <strong>${weightStatus}</strong> category for adults of your height.`;
});

window.addEventListener('load', initialEvents);