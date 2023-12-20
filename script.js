console.log('Make sure this works');

let monthlySalary = 0

function submitEmployee(event){
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
    tableBody.innerHTML += 
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
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('idNumber').value = ''
    document.getElementById('jobTitle').value = ''
    document.getElementById('annualSalary').value = ''

    //attempting to get the monthly count in
    // monthlySalary = document.getElementsByClassName('total-salary').value
    // monthlySalary = annualSalary / 12
    // console.log(monthlySalary = monthlySalary.toFixed(2))
    // monthlySalary.innerHTML += '<span onclick="workSubmit(event)"></span>'
    
    monthlySalary += Number(annualSalary);
  
    const divisor = 12;
    let trueMonthly = monthlySalary / divisor;
    console.log("True Monthly", trueMonthly);
    
    let lastTotal = document.getElementById("total-salary");
    lastTotal.textContent = trueMonthly;
    
    let monthlyTotalFooter = document.getElementById("monthlyTotalFooter")
    if (Number(trueMonthly) > 20000) {
        console.log('ALERT WE ARE OVER BUDGET')
        monthlyTotalFooter.classList.replace('baseBG', 'over-budget' )
    }
    
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

// function alertSalary() {
//     if (monthlySalary > 20000) {
//         console.log('ALERT WE ARE OVER BUDGET')
//     }
// }