
 document.querySelector('#tip-form').onchange = function(){

  const bill = Number(document.getElementById('billTotal').value);
  const tip = Number(document.getElementById('tipInput').value);  
  const people = Number(document.getElementById('tippersPresent').value);
  const tipValue = bill * (tip/100)
  const finalBill = bill + tipValue
  const splitBill = finalBill/people
console.log(finalBill.toFixed(2))
const tipAmount = document.querySelector('#tipAmount')
const totalBillWithTip = document.querySelector('#totalBillWithTip')
const totalPerPerson = document.querySelector('#totalPerPerson')
tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value = finalBill.toFixed(2);
 totalPerPerson.value = splitBill.toFixed(2);



 //Show Results

  document.getElementById('results').style.display='block'
}