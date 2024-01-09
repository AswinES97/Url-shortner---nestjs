
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        const email = document.getElementById("mail")
        const password = document.getElementById("password")
        const confirmPassword = document.getElementById("confirmPassword")

        //email varification
        function emailValidation() {
            const emailValue = email.value
            if (!emailValue.match(emailRegex)) {
                email.style.color = "red";
                return false;
            }
            email.style.color = "#1e3932";

            console.log("email")
            return true
        }

         //show password
         function showPassword() {
                if (password.type === "password") {
                    password.type = "text";
                } else {
                    password.type = "password";
                }
            }

            //show confirm password
            function showConfirmPassword() {
                if (confirmPassword.type === "password") {
                    confirmPassword.type = "text";
                } else {
                    confirmPassword.type = "password";
                }
            }

            function passwordValidation() {
             
                // Validate capital letters
                let upperCaseLetters = /[A-Z]/g;
                // Validate lowercase letters
                let lowerCaseLetters = /[a-z]/g;

                // Validate numbers
                let numbers = /[0-9]/g;
                if (

                    password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters) && password.value.match(numbers) && password.value.length >= 8) {
                    messagePasword.innerHTML = ""
                    console.log("password")
                    return true
                } else {
                    messagePasword.innerHTML = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    return false
                }

            }

            // confirm password
            function confirmPasswordValidation() {
                if ($('#password').val() == $('#confirmPassword').val()) {
                    $('#confirmMessage').html('')
                    console.log("confirm")
                    return true
                } else
                    $('#confirmMessage').html('Not Matching');
                return false
            }

            function signUpValidateForm() {
                console.log("validate form")
                if (emailValidation() && passwordValidation() && confirmPasswordValidation()) {
                    return true
                } else {
                    return false
                }
            }


            function loginValidateForm() {
                console.log("validate form")
                if (emailValidation() && passwordValidation() && confirmPasswordValidation()) {
                    return true
                } else {
                    return false
                }
            }
