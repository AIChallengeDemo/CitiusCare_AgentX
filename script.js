function submitClaim(){
 if(!memberId.value||!npi.value||!plan.value){alert('Fill mandatory fields');return;}
 window.location.href='success.html';
}
