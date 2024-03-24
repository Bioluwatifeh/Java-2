function checkDataTypes() {
    const username = prompt("Enter your username:");
    const cohortNumber = prompt("Enter your cohort number:");
    const passcode = prompt("Enter your passcode:");
    const question = prompt("Where are you from:");
    const Number = prompt("Enter your country code:");
  
    const usernameType = typeof username;
    const cohortNumberType = typeof parseInt(cohortNumber);
    const passcodeType = typeof passcode;
    const questionType = typeof question;
    const NumberType = typeof parseFloat(Number);
  
    alert(`Username is a ${usernameType}, Cohort Number is a ${cohortNumberType}, Passcode is a ${passcodeType}, Question is a ${questionType}, and Country code is a ${NumberType}.`);
  }
  