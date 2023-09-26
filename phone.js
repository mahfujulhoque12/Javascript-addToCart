
function updateCasePhone(isIncrease){
    const phoneCaseField=document.getElementById("phone-case-field");
    const phoneNumberString=phoneCaseField.value;
    const PrevPhoneNumber=parseInt(phoneNumberString);
    let newPhoneNumber;

    if(isIncrease==true){
        newPhoneNumber=  PrevPhoneNumber + 1;
    }
    else{
        newPhoneNumber= PrevPhoneNumber - 1;
    }

    
    phoneCaseField.value=newPhoneNumber;
    return newPhoneNumber;
}

function updateCasePrice(newPhoneNumber){
    const phoneTotalCasePrice=newPhoneNumber *59;
    const phoneTotalEle=document.getElementById("phone-total-case")
    phoneTotalEle.innerText=phoneTotalCasePrice;
}

document.getElementById("phone-case-btn-plus").addEventListener('click',function(){

   const newPhoneNumber= updateCasePhone(true)
   updateCasePrice(newPhoneNumber)
   calculateSubTotal();
})

document.getElementById("phone-case-btn-minus").addEventListener('click',function(){

   const newPhoneNumber= updateCasePhone(false)

   updateCasePrice(newPhoneNumber)
   calculateSubTotal();
})