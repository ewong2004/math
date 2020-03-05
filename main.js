// Simple addition calculator

// Event listener
document.getElementById('calc-btn').addEventListener('click', calcTotal);

// Event Fubnctions
function calcTotal() {
  // Input - get 2 numbers
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);

  // Process - add 2 numbers
  let total = num1 + num2;

  // Output - display the total
  document.getElementById('result').innerHTML = total;
}