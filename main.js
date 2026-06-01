const password_checker = document.querySelector('.password-checker')
const password = document.querySelector('#password')
const progress_bar = document.querySelector('.bar')
const indicator = document.querySelector('#indicator')

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
     
    if(strenght == 1) {
        progress_bar.style.cssText += `background-color:red;`;  indicator.textContent = "Password strength: Very weak";
    };
    if(strenght == 2) {
        progress_bar.style.cssText += `background-color:orange;`;  indicator.textContent = "Password strength: Weak";
    };
    if(strenght == 3){
        progress_bar.style.cssText += `background-color:yellow;`;  indicator.textContent = "Password strength: Normal";
    };
    if(strenght == 4){
        progress_bar.style.cssText += `background-color:deepskyblue;`;  indicator.textContent = "Password strength: Strong";
    };
    if(strenght == 5){
        progress_bar.style.cssText += `background-color:lime;`;  indicator.textContent = "Password strength: Very strong";
    };
    console.log(strenght);
}
