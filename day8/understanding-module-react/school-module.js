let myFees=0;
function payFees(payment){
    console.log(`your fees ${payment} is paid`);
    myFees=payment;
}
function getFees(){
    return myFees;
}
export{payFees,getFees};
