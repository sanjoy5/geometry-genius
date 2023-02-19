// Get the number value of input Field 
function getNumberValueOfInputField(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValue = parseFloat(inputField.value)
    return inputFieldValue;
}


// Get the text value of text Field 
function getTextValueOfTextField(textId) {
    const textField = document.getElementById(textId)
    const textFieldValue = textField.innerText
    return textFieldValue;
}


// Set the Text Value 
function setTextValue(id, value) {
    const textField = document.getElementById(id)
    textField.innerHTML = value
}


// Set the calculation Result 
function setAnserwerValue(name, answer) {
    const answerPlace = document.getElementById('answer')
    let newId = Math.round(Math.random() * 10000)
    console.log('##$', newId);
    const ansId = document.querySelectorAll('#ansId').length;
    const div = document.createElement('div')
    div.innerHTML = `
    <div id="${newId}" class="my-5 flex flex-col">
    <div class="flex items-center justify-around">
        <p id="ansId" className="text-sm text-gray-700">${ansId + 1}.</p>
        <p class="text-sm text-gray-700">Name: ${name}</p>
        <p class="text-sm text-gray-700">Ans: <span id="${name}-answer-${newId}">${answer}cm<sup>2</sup></span></p>
    </div>

    <div class="mt-3">
        <button onclick="document.getElementById('${name}-answer-${newId}').innerText = (parseFloat(document.getElementById('${name}-answer-${newId}').innerText)* 0.01).toFixed(2) + 'm'"
            class="py-2 mt-2 px-6 text-sm font-medium bg-sky-500 text-white rounded-md hover:bg-sky-600">Convert
            to m<sup>2</sup></button>
        <button onclick="document.getElementById('${newId}').style.display='none';"
            class="py-2 mt-2 px-6 text-sm font-medium bg-rose-500 text-white rounded-md hover:bg-rose-600">Delete</button>

    </div>
</div>
    `
    answerPlace.appendChild(div)


}


// Set Empty Input Field 
function setValueNull(valueId) {
    document.getElementById(valueId).value = '';
}


// Set Random Backgound Color
function changeBackground1() {
    document.getElementById('box1').style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
function changeBackground2() {
    document.getElementById('box2').style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
function changeBackground3() {
    document.getElementById('box3').style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
function changeBackground4() {
    document.getElementById('box4').style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
function changeBackground5() {
    document.getElementById('box5').style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
function changeBackground6() {
    document.getElementById('box6').style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}
