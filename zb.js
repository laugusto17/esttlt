(function() {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = zbjs.ajaxurl + "?action=zbjs&task=getjs&md5=" + zbjs.md5;
    document.body.appendChild(s);
})();