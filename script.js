const passwordChecker = document.querySelector('.password-checker');
const password = document.querySelector('#password');
const progressBar = document.querySelector('.bar');


password.onkeyup = () => {
    console.log(password.value);
    checkPasswordStrength(password.value);

}

function checkPasswordStrength(password) {
    let strength = 0;

    if(password.match(/(?=.*[A-Z])/)) strength ++;   //1. Uppercase Characters
    if(password.match(/(?=.*[a-z])/)) strength ++;   //2. Lowercase Characters
    if(password.match(/(?=.*[0-9])/)) strength ++;   //3. Numerical characters
    if(password.match(/(?=.*[`!@#$%^&*])/)) strength ++;   //4. Special Characters
    if(password.match(/(?=.{9,})/)) strength ++;  //5. 9 Characters
  
    console.log(strength);

    switch(strength) {
        case 0:
            passwordChecker.style.borderColor = 'transparent';
            progressBar.style.cssText = `width : ${(strength/5)*100}%; background-color: unset;`;
            break;

        case 1:
            passwordChecker.style.borderColor = 'red';
            progressBar.style.cssText = `width : ${(strength/5)*100}%; background-color: red;`;
            break;
        case 2:
            passwordChecker.style.borderColor = 'orangered';
            progressBar.style.cssText = `width : ${(strength/5)*100}%; background-color: orangered;`;
            break;
        case 3:
            passwordChecker.style.borderColor = 'gold';
            progressBar.style.cssText = `width : ${(strength/5)*100}%; background-color: gold;`;
            break;
        case 4:
            passwordChecker.style.borderColor = 'deepskyblue';
            progressBar.style.cssText = `width : ${(strength/5)*100}%; background-color: deepskyblue;`;
            break;
        case 5:
            passwordChecker.style.borderColor = 'lime';
            progressBar.style.cssText = `width : ${(strength/5)*100}%; background-color: lime;`;
            break;
    } 
}

