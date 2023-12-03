console.log('Make sure this works');

function workSubmit(event){
    event.preventDefault();
    let tableBody = document.getElementById('tableBody');

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let idNumber = document.getElementById('idNumber').value;
    let jobTitle = document.getElementById('jobTitle').value;
    let annualSalary = document.getElementById('annualSalary').value;
    //conosle logging to see if it works
    console.log("Expecting custom first name:",firstName);
    console.log("Expecting custom last name:",lastName);
    console.log("Expecting custom id #:",idNumber);
    console.log("Expecting custom job title:",jobTitle);
    console.log("Expecting custom salary:",annualSalary);
    tableBody.innerHTML += //coming up with Uncaught TypeError: Cannot read properties of undefined (reading 'innerHTML')
    `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualSalary}</td>
        <td><button onclick="deleteEmployee(event)">Delete</button></td>
    </tr>
    `
// todo this element is meant to accept the inputs that I put in
    document.getElementById('firstName') = ''
    document.getElementById('lastName') = ''
    document.getElementById('idNumber') = ''
    document.getElementById('jobTitle') = ''
    document.getElementById('annualSalary') = ''

    //attempting to get the monthly count in
    let monthlySalary = document.getElementById('total-salary')
    monthlySalary.innerHTML += 
    
}
function deleteEmployee(event) {
    event.preventDefault();
    return event.target.parentElement.parentElement.remove();
  }
//   let monthlySalary = 0
// function calculateSalary(event){
//     console.log(monthlySalary += document.getElementById('annualSalary').value / 12)
//     console.log(Math.trunc(monthlySalary));
//     return event.target
// }

function alertSalary() {
    if (monthlySalary > 20000) {
        console.log('ALERT WE ARE OVER BUDGET')
    }
}