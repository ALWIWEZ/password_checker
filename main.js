const password_checker = document.querySelector('.password-checker')
const password = document.querySelector('#password')
const progress_bar = document.querySelector('.bar')

password.onkeyup = () => {
    checkPasswordStrenght(password.value)
}

function checkPasswordStrenght(password){
    let strenght = 0;
    
    if(/(?=.*[A-Z])/.test(password)) strenght++;
    if(/(?=.*[a-z])/.test(password)) strenght++;
    if(/(?=.*[0-9])/.test(password)) strenght++;
    if(/(?=.*[`!@#$%^&*])/.test(password)) strenght++;
    if(/(?=.{9,})/.test(password)) strenght++;

    progress_bar.style.cssText = `width : ${(strenght/5)*100}%`;
     
    if(strenght == 1) progress_bar.style.cssText += `background-color:red;`;
    if(strenght == 2) progress_bar.style.cssText += `background-color:orange;`;
    if(strenght == 3) progress_bar.style.cssText += `background-color:yellow;`;
    if(strenght == 4) progress_bar.style.cssText += `background-color:deepskyblue;`;
    if(strenght == 5) progress_bar.style.cssText += `background-color:lime;`;
    console.log(strenght);
}