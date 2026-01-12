function login(){
 if(username.value==='CTUser' && password.value==='1234'){
   localStorage.setItem('auth','true');
   window.location.href='index.html';
 }else{
   alert('Invalid credentials');
 }
}
function checkAuth(){
 if(localStorage.getItem('auth')!=='true'){
   window.location.href='login.html';
 }
}
function logout(){
 localStorage.removeItem('auth');
 window.location.href='login.html';
 }
