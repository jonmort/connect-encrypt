function main() {

    $(document).ready(function() {
        AP.resize($("form").outerWidth(), $("form").outerHeight());
    });

    $(document).on("click", "#decrypt", function(event) {
        event.preventDefault();
        var password = $("#password").val();
        AP.require(['events', 'messages'], function(events, messages) {
            events.emit('password', password);
            messages.success('Password', 'Password sent to all encrypted macros', {
                'closeable': true,
                'fadeout': true
            });
        });
    });
}
