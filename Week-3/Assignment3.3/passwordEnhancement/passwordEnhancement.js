function isStrongPassword(pass) {

    if (pass.length < 8) {
        return false
    }
    if (pass.includes("password")) {
        return false
    }
    let flag = 0
    for (let i = 0; i < pass.length; i++) {
        if (pass[i].toUpperCase() === pass[i] && !Number(pass[i])) {
            flag = 1
            break;
        }
    }
    if (flag == 0) {
        return false
    }
    return true

}

pass1 = document.getElementById('pass1')
pass2 = document.getElementById('pass2')
submit = document.getElementById('submit')

submit.addEventListener("click", () => {
    if(pass1.value.length == 0 || pass2.value.length == 0) {
        document.getElementById('result').innerHTML = "Password Field Empty. Please Enter the Password"

    }
    else if(!isStrongPassword(pass1.value)) {
        document.getElementById('result').innerHTML = "Password not Strong. Please Enter a strong Password"
    }
    else if(pass1.value !== pass2.value ) {
        document.getElementById('result').innerHTML = "Password does not match. Please Enter the password again"
    }
    else {
        document.getElementById('result').innerHTML = "Password submitted."
    }
})

console.log(isStrongPassword("Qwerty123"))