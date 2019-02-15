$(document).ready(function () {
    $('#submit').click(function () {
        if ($('#name').val() == '') {
            alert('please enter your name');
        }
        else {
            if ($('#email').val() == '') {
                alert('Please enter your email');
            }
            else {
                if ($('#password').val() == '') {
                    alert('Please enter your password');
                }
                else {
                    if ($('#password').val() != $('#cpassword').val()) {
                        alert('Please enter the same password');
                    }
                    else {
                        if ($('input[type="checkbox"]').prop("checked") == false) {
                            alert("Please Agree To Terms and Conditions.");
                        }
                    }
                }
            }
        }
        if ($('#name').val() != '' && $('#email').val() != '' && $('#password').val() == $('#cpassword').val() && $('input[type="checkbox"]').prop("checked") == true) {
            alert("Successfully done");
        }
    });
});