function submitClaim(){
 if(!memberId.value||!npi.value||!plan.value){alert('Fill all fields');return;}
 window.location.href='success.html';
}
