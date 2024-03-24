let nameEl = document.getElementById('name-el');
let passcodeEl = document.getElementById('passcode-el');
let cohortEl = document.getElementById('cohort-el');
let winEl = document.getElementById('win-el');
let systemNum = document.getElementById('system-num');
let userNum = document.getElementById('user-num');
let cohortMembers = ['jasper', 'shedrack', 'israel'];

function lotteryquiz() {
    let name = prompt('Enter your name');
    if (cohortMembers.includes(name.toLowerCase())) {
        alert('Yes, you entered the correct cohort name.');
    } else {
        alert('You entered the wrong name.');
        return;
    }
    let passcode = prompt('Enter your passcode');
    let cohort = prompt('Enter your cohort');
    let userNumInput = parseInt(prompt('Enter a number between 20 to 40'));

    passcodeEl.textContent = `Passcode: ${passcode}`;
    nameEl.textContent = `Name: ${name}`;
    cohortEl.textContent = `Cohort: ${cohort}`;

    let min = 20;
    let max = 40;
    let systemRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    systemNum.innerHTML = `System Number: ${systemRandomNum}`;
    userNum.innerHTML = `User Number: ${userNumInput}`;

    if (userNumInput === systemRandomNum) {
        winEl.innerHTML = `Congratulations! You have won the game. Collect your $100.`;
    } else {
        winEl.innerHTML = `Sorry, you entered the wrong number. Try again.`;
    }
}
