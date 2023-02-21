////////////////////// I Know more than this but i'm tooo late to submit my assignment i do more in next  (sorry)!

// declare
var loginForm = document.querySelectorAll('.loginForm');
var Email = document.getElementById('Email')
var Password = document.getElementById('Password');
var logInBtn = document.querySelector('.login');
var wrong = document.querySelector('.wrong');
var emptyInput = document.querySelector('.emptyInput');
var signLink = document.getElementById('signLink');
var logLink = document.getElementById('logLink');
var signBtn = document.querySelector('.signUp');
var loginSys = document.getElementById('loginSys');
var userName =document.getElementById('Name');
var registration = document.getElementById('registration');
var userHome = document.getElementById('userHome');
//arrays
 loginArr=[];
 ArrR=[];
//when click in sign up link
 signLink.addEventListener('click' , function(){
    loginSys.classList.replace('d-block' , 'd-none')
    registration.classList.replace('d-none' , 'd-block')
});

logLink.addEventListener('click' , function (){
    loginSys.classList.replace('d-none' , 'd-block')
    registration.classList.replace('d-block' , 'd-none')
})
// registration 
function register(){
    var registerDetails = {
        uName : userName.value,
        passNum : Password.value,
        emailName : Email.value
    }
        console.log( ArrR.push(registerDetails))
        localStorage.setItem('register detais',JSON.stringify(ArrR));}
//login btn
logInBtn.addEventListener('click',function(){
    login();
});
//regist btn
signBtn.addEventListener('click', function(){
    register()
})
// login 
function login(){
    if ( empty ()== true && emailvalidation() == true && passValidation () == true){
    var mailDetails = {
        emailName :Email.value,
        passNum : Password.value
    }

    console.log(loginArr.push(mailDetails))
    localStorage.setItem('login detais',JSON.stringify(loginArr));
    window.location.href = 'home.html';
    userHome.innerHTML = 'Welcome To You '+ emailName;
   
}
}

//REGEX
//email validation
function emailvalidation(){
    regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex.test(Email.value) == true){
        return true;
    }
    else {
        wrong.classList.replace('d-none','d-block');
        return false
    }
}
//no inputs validation

function empty (){
    if (Email.value !=='' && Password !==''){
        return true
    }
    else {
        emptyInput.classList.replace('d-none','d-block');
        return false
    }
}
//pass validation
function passValidation (){
    regex = /(?=.*[A-Z])(?=.{8,})/;
  if (regex.test(Password.value) == true)  {
    return true
  }
  else{
    wrong.classList.replace('d-none','d-block');
    return false
  }
    
}


