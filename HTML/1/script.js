const submit = document.getElementById('submit'),
    firstName = document.getElementById('firstname'),
    middleName = document.getElementById('middlename'),
    lastName = document.getElementById('lastname'),
    phone = document.getElementById('phone'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    rpassword = document.getElementById('rpassword'),
    emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    phoneRe = /9[0-9]{9}/,
    alphabetRe = /^[A-z\s]*$/;
function changeBackgroundRed(inp){
    inp.style.background = '#9b2828';
}
function changeBackgroundWhite(inp){
    inp.style.background = 'white';
}
submit.addEventListener("click", function(e){
    e.preventDefault();
    if(password.value == rpassword.value) {
        changeBackgroundWhite(password)
        changeBackgroundWhite(rpassword)
    }else{
        changeBackgroundRed(rpassword)
        changeBackgroundRed(password)
    }
    if (!password.value){
        changeBackgroundRed(password)
    }else{
        changeBackgroundWhite(password)
    }

    if(emailRe.test(email.value) && email.value){
        changeBackgroundWhite(email)
    }else {
        changeBackgroundRed(email)
    }
    if(phoneRe.test(phone.value) && phone.value){
        changeBackgroundWhite(phone)
    }else {
        changeBackgroundRed(phone)
    }
    if (alphabetRe.test(firstName.value) && firstName.value){
        changeBackgroundWhite(firstName)
        console.log('test')
    }else {
        changeBackgroundRed(firstName)
    }
    if (alphabetRe.test(lastName.value) && lastName.value){
        changeBackgroundWhite(lastName)
    }else {
        changeBackgroundRed(lastName)
    }
    if (alphabetRe.test(middleName.value)){
        changeBackgroundWhite(middleName)
    }else {
        changeBackgroundRed(middleName)
    }
})