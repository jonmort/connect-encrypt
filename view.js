function main() {

    function decrypt(password) {
        var message = getUrlVar("message");
        var decrypted = CryptoJS.AES.decrypt(message, password).toString(CryptoJS.enc.Utf8);
        if (decrypted) {
            document.getElementById("output").innerText = decrypted;
            setTimeout(function() {
                AP.resize($("#output").textWidth(), $("#output").textHeight());
            }, 0);
        }
    }

    $(document).ready(function() {
        AP.resize($("form").outerWidth(), $("form").outerHeight());
    });

    AP.require('events', function(events){
        events.on('password', decrypt);
    });

    $(document).on("click", "#decrypt", function(event) {
        event.preventDefault();
        var password = $("#password").val();
        decrypt(password);
    });
}
