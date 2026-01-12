function submitClaim(){
  const memberId=document.getElementById('memberId').value;
  const npi=document.getElementById('npi').value;
  const plan=document.getElementById('plan').value;

  if(!memberId||!npi||!plan){
    alert('Please fill all mandatory fields');
    return;
  }
  window.location.href='success.html';
}
