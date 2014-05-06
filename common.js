function getUrlVar(key){
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
    return result && unescape(result[1]) || "";
}



var hostBaseUrl = getUrlVar('xdm_e') + getUrlVar('cp');
var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
script.type = "text/javascript";
script.src = hostBaseUrl +'/atlassian-connect/all.js';
script.setAttribute('data-options','base:true;resize:false;');
script.onreadystatechange = function () {
    if (this.readyState == 'complete') {
        main();
    }
};
script.onload = main;
head.appendChild(script);

$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) {
        $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    }
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};
$.fn.textHeight = function(text, font) {
    if (!$.fn.textWidth.fakeEl) {
        $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    }
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.height();
};
