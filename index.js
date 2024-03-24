let button = document.querySelector('#btn');
let update = document.querySelector('#updatedlist');
let student = ['jasper', 'shedrack', 'isreal', 'confidence'];

function stuindex() {
    let stuindex = parseInt(prompt('Enter the student index you want to delete'));
    if (stuindex > (student.length) - 1) {
        alert('This index does not exist. Please try again.');
    } else {
        student.splice(stuindex, 1);
        update.textContent = student.join(', ');
    }
}
