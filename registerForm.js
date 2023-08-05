function validation() {
    if (document.formFill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username";
        return false;
    }
    else if (document.formFill.Username.value.length < 6) {
        document.getElementById("result").innerHTML = "Username Atleast Six Letters";
        return false;
    }
    else if (document.formFill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter Email";
        return false;
    }
    else if (document.formFill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter Password";
        return false;
    }
    else if (document.formFill.Password.value.length < 8) {
        document.getElementById("result").innerHTML = "Password must be 8 digits";
        return false;
    }
    else if (document.formFill.ConfirmPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter Confirm Password";
        return false;
    }
    else if (document.formFill.ConfirmPassword.value !== document.formFill.Password.value) {
        document.getElementById("result").innerHTML = "Password Does'nt Matched";
        return false;
    }
    else if (document.formFill.Password.value == document.formFill.ConfirmPassword.value) {
        popup.classList.add("open-slide");
        return false;
    }


}
var popup = document.getElementById("popup");
function closeSlide(){
    popup.classList.remove('open-slide');
}

// temrary from validation for login page
function loginvalidation() {
    if (document.formFill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter Email";
        return false;
    }
    else if (document.formFill.Password.value.length < 8) {
        document.getElementById("result").innerHTML = "Password must be 8 digits";
        return false;
    }
    else{
        popup.classList.add("open-slide");
        return false;}
}