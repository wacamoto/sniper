$(document).ready(function() {
    $('.menu-beconn').hide();
    $('.menu-connto').hide();
    $('#gameWindows').hide();

    $('#beconn').on('click', function() {
        $('.menu-beconn, .menu-connto, .menu-role').hide();
        $('.menu-beconn').show();
    });

    $('#connto').on('click', function() {
        $('.menu-beconn, .menu-connto, .menu-role').hide();
        $('.menu-connto').show();
    });

    $('.back').on('click', function() {
        $('.menu-beconn, .menu-connto, .menu-role').hide();
        $('.menu-role').show();
    })
})
