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
document.getElementById("tipAmount").textContent = `$${tipAmount.toFixed(2)}`;
document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;
document.getElementById("tipPerPerson").textContent = `$${tipPerPerson.toFixed(2)}`;
document.getElementById("totalPerPerson").textContent = `$${totalPerPerson.toFixed(2)}`;
}

// add event listener to the calculate button

document.getElementById("calculateBtn").addEventListener("click", calculateTip);

// add event to calculate automatically when pressing enter in any input field

// document.querySelectorAll("input, select").forEach(element => {)
