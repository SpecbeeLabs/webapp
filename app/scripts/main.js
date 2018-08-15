$('.navbar__toggler').click(function () {
    $(this).toggleClass('is-open');
    $(this).next().toggleClass('is-open');
});