function calculateTip() {
const billAmount = parseFloat(document.getElementById("billAmount").value);
const serviceRating = parseFloat(document.getElementById("servicerating").value);
const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter valid values for all fields.");
    return;
}
if(numberOfPeople < 1 || isNaN(numberOfPeople)){
    alert("Number of people must be at least 1.");
    return;
}

// calculate values
const tipAmount = billAmount * serviceRating;
const totalAmount = billAmount + tipAmount;
const tipPerPerson = tipAmount / numberOfPeople;
const totalPerPerson = totalAmount / numberOfPeople;

//display results with 2 decimal places
document.getElementById("tipAmount").textContent = `francs cfa ${tipAmount.toFixed(2)}`;
document.getElementById("totalAmount").textContent = `francs cfa ${totalAmount.toFixed(2)}`;
document.getElementById("tipPerPerson").textContent = `francs cfa ${tipPerPerson.toFixed(2)}`;
document.getElementById("totalPerPerson").textContent = `francs cfa ${totalPerPerson.toFixed(2)}`;
}

// add event listener to the calculate button

document.getElementById("calculateBtn").addEventListener("click", calculateTip);

// add event to calculate automatically when any input value changes

document.querySelectorAll("input, select").forEach(element => {
    element.addEventListener("input", calculateTip);
});
