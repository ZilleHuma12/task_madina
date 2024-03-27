function onClickSubmit()
{
    var message = document.getElementById("formMessage");
    var phone = document.getElementById("formPhone");

    var regex = /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/;

    if (regex.test(phone.value)) {
        // Valid international phone number
        alert("Phone is valid");
    } else {
        // Invalid international phone number
        alert("Phone is invalid");
        return;
    }
    if(message.value.length > 300)
    {
        alert("Length cannot be more than 300 characters");
        return;    
    }

    alert("Thank you, your form was submitted")
}