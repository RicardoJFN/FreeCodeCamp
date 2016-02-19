$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');
    });
      $('div').fadeTo('fast',1);
    $('div').mouseleave(function(){
        $('div').fadeTo('fast', 0.5);
    });
});
