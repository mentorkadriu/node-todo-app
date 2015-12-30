$(document).ready(function () {

    $('#addTodo').submit(function(){
        var inputV = $('#todo');
        var helpBlock = $('help-block');

        if (inputV.val() < 1) {
            inputV.parent().addClass('has-error');
            inputV.parent().parent().append('<span class="help-block">Please fill form!</span>');
            return false;
        } else {
            return true;
        }
    });

    $('#addTodo').on('click', function () {
        $(this).children().filter('.help-block').remove();
        $(this).children().filter('.input-group').removeClass('has-error');
    })
});