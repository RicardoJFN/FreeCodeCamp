$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
    var $target = $('ol :nth-child(4)');
    $target.fadeOut('fast');
    $('button').click(function(){
        $('.vanish').fadeOut('slow');
    });
});
