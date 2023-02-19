


// Tringle Area Calculate 
document.getElementById('triangle-btn').addEventListener('click', function () {

    const b = getNumberValueOfInputField('triangle-inputOne')
    const h = getNumberValueOfInputField('triangle-inputTwo')

    if (isNaN(b) || isNaN(h)) {
        alert('Invalid input !!! Please provide a valid input number.')
        return;
    } else if (b < 0 || h < 0) {
        alert('We cannot take nagetive number value!!! You have to provide positive number value.')
        return;
    }
    else {
        setTextValue('triangle-b', b)
        setTextValue('triangle-h', h)

        const areaStr = (0.5 * b * h).toFixed(2)
        const area = parseFloat(areaStr)
        const name = 'Triangle'
        setAnserwerValue(name, area)

        setValueNull('triangle-inputOne')
        setValueNull('triangle-inputTwo')
    }

})



// Rectangle Area Calculate 
document.getElementById('rectangle-btn').addEventListener('click', function () {

    const w = getNumberValueOfInputField('rectangle-inputOne')
    const l = getNumberValueOfInputField('rectangle-inputTwo')

    if (isNaN(w) || isNaN(l)) {
        alert('Invalid input !!! Please provide a valid input number.')
        return;
    } else if (w < 0 || l < 0) {
        alert('We cannot take nagetive number value!!! You have to provide positive number value.')
        return;
    } else {
        setTextValue('rectangle-w', w)
        setTextValue('rectangle-l', l)

        const areaStr = (w * l).toFixed(2)
        const area = parseFloat(areaStr)
        const name = 'Rectangle'
        setAnserwerValue(name, area)

        setValueNull('rectangle-inputOne')
        setValueNull('rectangle-inputTwo')
    }


})


// Parallelogram Area Calculate 
document.getElementById('parallelogram-btn').addEventListener('click', function () {

    const b = getNumberValueOfInputField('parallelogram-inputOne')
    const h = getNumberValueOfInputField('parallelogram-inputTwo')

    if (isNaN(b) || isNaN(h)) {
        alert('Invalid input !!! Please provide a valid input number.')
        return;
    } else if (b < 0 || h < 0) {
        alert('We cannot take nagetive number value!!! You have to provide positive number value.')
        return;
    } else {
        setTextValue('parallelogram-b', b)
        setTextValue('parallelogram-h', h)

        const areaStr = (b * h).toFixed(2)
        const area = parseFloat(areaStr)
        const name = 'Parallelogram'
        setAnserwerValue(name, area)

        setValueNull('parallelogram-inputOne')
        setValueNull('parallelogram-inputTwo')
    }
})



// Rhombus Area Calculate 
document.getElementById('rhombus-btn').addEventListener('click', function () {

    const d1 = getNumberValueOfInputField('rhombus-inputOne')
    const d2 = getNumberValueOfInputField('rhombus-inputTwo')

    if (isNaN(d1) || isNaN(d2)) {
        alert('Invalid input !!! Please provide a valid input number.')
        return;
    } else if (d1 < 0 || d2 < 0) {
        alert('We cannot take nagetive number value!!! You have to provide positive number value.')
        return;
    } else {
        setTextValue('rhombus-d1', d1)
        setTextValue('rhombus-d2', d2)

        const areaStr = (0.5 * d1 * d2).toFixed(2)
        const area = parseFloat(areaStr)
        const name = 'Rhombus'
        setAnserwerValue(name, area)

        setValueNull('rhombus-inputOne')
        setValueNull('rhombus-inputTwo')
    }
})


// Pentagon Area Calculate 
document.getElementById('pentagon-btn').addEventListener('click', function () {

    const p = getNumberValueOfInputField('pentagon-inputOne')
    const b = getNumberValueOfInputField('pentagon-inputTwo')

    if (isNaN(p) || isNaN(b)) {
        alert('Invalid input !!! Please provide a valid input number.')
        return;
    } else if (p < 0 || b < 0) {
        alert('We cannot take nagetive number value!!! You have to provide positive number value.')
        return;
    } else {
        setTextValue('pentagon-p', p)
        setTextValue('pentagon-b', b)

        const areaStr = (0.5 * p * b).toFixed(2)
        const area = parseFloat(areaStr)
        const name = 'Pentagon'
        setAnserwerValue(name, area)

        setValueNull('pentagon-inputOne')
        setValueNull('pentagon-inputTwo')
    }
})


// Ellipse Area Calculate 
document.getElementById('ellipse-btn').addEventListener('click', function () {

    const a = getNumberValueOfInputField('ellipse-inputOne')
    const b = getNumberValueOfInputField('ellipse-inputTwo')
    const pi = 3.14

    if (isNaN(a) || isNaN(b)) {
        alert('Invalid input !!! Please provide a valid input number.')
        return;
    } else if (a < 0 || b < 0) {
        alert('We cannot take nagetive number value!!! You have to provide positive number value.')
        return;
    } else {
        setTextValue('ellipse-a', a)
        setTextValue('ellipse-b', b)
        setTextValue('ellipse-pi', pi)

        const areaStr = (pi * a * b).toFixed(2)
        const area = parseFloat(areaStr)
        const name = 'Ellipse'
        setAnserwerValue(name, area)

        setValueNull('ellipse-inputOne')
        setValueNull('ellipse-inputTwo')
    }
})