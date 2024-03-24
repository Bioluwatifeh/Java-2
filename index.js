let faildqueZ = document.querySelector('#failed-question')
let correctqueZ = document.querySelector('#correct-question')
let totalScore = document.querySelector('#totalScore')
let buttON = document.querySelector('#h4')
let buttON2 = document.querySelector('#h')

failedquestion = []
correctQuestion = []

function nameOFpresident() {
    let counVar = prompt('Do you want to start the quiz? Type "yes" to continue.')
    if (counVar.toLowerCase() !== "yes") {
        alert('You have chosen not to start the quiz.')
        return
    }

    alert('Welcome! You will be presented with a series of questions. If your answer is correct, you will be awarded 10%; otherwise, no marks will be given.')

    // Question 1
    let question1 = prompt('In which year was Tafawa Balewa born?')
    if (question1 === '1912') {
        mark1 = 10
        correctQuestion.push(`Tafawa Balewa was born in ${question1} =  10%`)
    } else {
        mark1 = 0
        failedquestion.push(`Tafawa Balewa was born in 1912, not ${question1}`)
    }

    // Question 2
    let question2 = prompt('In which year was Nnamdi Azikiwe born?')
    if (question2 === '1904') {
        mark2 = 10
        correctQuestion.push(`Nnamdi Azikiwe was born in ${question2} =  10%`)
    } else {
        mark2 = 0
        failedquestion.push(`Nnamdi Azikiwe was born in 1904, not ${question2}`)
    }

    // Question 3
    let question3 = prompt('In which year was Usman Shagari born?')
    if (question3 === '1925') {
        mark3 = 10
        correctQuestion.push(`Usman Shagari was born in ${question3} = 10%`)
    } else {
        mark3 = 0
        failedquestion.push(`Usman Shagari was born in 1925, not ${question3}`)
    }

    // Question 4
    let question4 = prompt('In which year was Ibrahim Babangida born?')
    if (question4 === '1941') {
        mark4 = 10
        correctQuestion.push(`Ibrahim Babangida was born in ${question4} = 10%`)
    } else {
        mark4 = 0
        failedquestion.push(`Ibrahim Babangida was born in 1941, not ${question4}`)
    }

    // Question 5
    let question5 = prompt('In which year was Sani Abacha born?')
    if (question5 === '1943') {
        mark5 = 10
        correctQuestion.push(`Sani Abacha was born in ${question5} = 10%`)
    } else {
        mark5 = 0
        failedquestion.push(`Sani Abacha was born in 1943, not ${question5}`)
    }

    // Displaying Results
    displayResults()
}

function displayResults() {
    faildqueZ.innerHTML = ''
    correctqueZ.innerHTML = ''
    for (let i = 0; i < failedquestion.length; i++) {
        let li = document.createElement('li')
        li.textContent = failedquestion[i]
        faildqueZ.appendChild(li)
    }

    for (let i = 0; i < correctQuestion.length; i++) {
        let li = document.createElement('li')
        li.textContent = correctQuestion[i]
        correctqueZ.appendChild(li)
    }

    let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5
    totalScore.textContent = `Your total score is ${totalMarks}%`

    buttON.classList.add('open')
    buttON2.classList.add('open')
}
