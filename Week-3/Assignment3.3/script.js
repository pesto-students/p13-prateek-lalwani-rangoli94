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

console.log(isStrongPassword("Qwerty123"))