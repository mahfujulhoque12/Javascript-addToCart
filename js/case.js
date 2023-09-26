
function updateNumber(isIncrease){
    const caseNumberField=document.getElementById("case-num-field");
    const caseNumberString=caseNumberField.value;
    const PrevCaseNumber=parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease===true){
       newCaseNumber=PrevCaseNumber + 1;
    } else{
        newCaseNumber=PrevCaseNumber -1;
    }
  
    caseNumberField.value=newCaseNumber;

    return newCaseNumber;
}

function updateCaseToatalPrice(newCaseNumber){

    const totalPrice=newCaseNumber * 1219;
    const caseTotalElement=document.getElementById('case-total');
    caseTotalElement.innerText=totalPrice;
}




document.getElementById("btn-case-plus").addEventListener('click',function(){
  
   const newCaseNumber= updateNumber(true);

  updateCaseToatalPrice(newCaseNumber);

  //calculate total
    calculateSubTotal();
})

document.getElementById("btn-case-minus").addEventListener('click',function(){
   const newCaseNumber= updateNumber(false);

 updateCaseToatalPrice(newCaseNumber);
 calculateSubTotal();

})