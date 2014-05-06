function main() {
    AP.require(["confluence", "dialog"], function (confluence, dialog) {
        function onSubmit() {
            var password = jQuery("#password").val();
            var encrypted = CryptoJS.AES.encrypt(jQuery("#message").val(), password);
            var macroParams = {
                "message": encrypted.toString()
            };
            confluence.saveMacro(macroParams);
            confluence.closeMacroEditor();
            return true;
        }
        $('input').keypress(function (e) {
            if (e.which == 13) {
                onSubmit();
                return false;    //<---- Add this line
            }
            return true;
        });
        dialog.getButton("submit").bind(onSubmit);
    });
};
