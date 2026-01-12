function submitClaim(){
 if(!memberId.value || !npi.value || !plan.value){
   alert('Please fill mandatory fields');
   return;
 }
 window.location.href='success.html';
}
