$(document).ready(function(){
    $('.menu-icon').click(function(evt){
        evt.preventDefault();
        //if already open
        if($(this).hasClass('opened')){
            //close
            $(this).removeClass('opened');
        }else{
            //open
            $(this).addClass('opened');
            console.log('hello');
        }
    });
});