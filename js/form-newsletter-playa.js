$("#contactNews").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Por favor llene todos los campos requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm() {
    // Initiate Variables With Form Content
    var email = $("#subscribeemail").val();

    $.ajax({
        type: "POST",
        url: "php/newsletter-playa.php",
        data: "email=" + email,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}

function formSuccess() {
    $("#contactNews");
    submitMSG(true, "¡Suscrito exitosamente!")
}

function formError() {
    $("#contactNews").removeClass().addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center fadeIn animated text-success";
    } else {
        var msgClasses = "h3 text-center solo-rojo";
    }
    $("#NewsMsgSubmit").removeClass().addClass(msgClasses).text(msg);
}