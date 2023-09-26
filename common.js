function getTextElementValueById(elementId){
    const phoneTotalElement=document.getElementById(elementId);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
  
}

function setTextElementValueById(elementId,value){
    const subTotalElement=document.getElementById(elementId);
    subTotalElement.innerText=value;

}

function calculateSubTotal(){
    const currentPhoneTotal= getTextElementValueById('case-total');
    const currentCaseTotal=getTextElementValueById('phone-total-case');
    const currentSubTotal=currentPhoneTotal+currentCaseTotal;
    setTextElementValueById('sub-total',currentSubTotal)
 
    //tax total
    const taxAmountString= (currentCaseTotal * 0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString)
    setTextElementValueById('tax-amount',taxAmount);

    const finalAmount=currentSubTotal + taxAmount;
    setTextElementValueById('final-total',finalAmount)
}