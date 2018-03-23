$(document).ready(function(){
    $('.menu-icon').click(function(evt){
        evt.preventDefault();
        //if already open
        if($(this).hasClass('opened')){
            //close
            $(this).removeClass('opened');
            $('.nav-links').hide();
        }else{
            //open
            $(this).addClass('opened');
            console.log('hello');
            $('.nav-links').show();
        }
    });
});