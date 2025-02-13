$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const newTask = $('#task').val();
        $(`<li>${newTask}</li>`).appendTo('ul');
        $('#task').val('');
    })
    $(document).on('click','li',function(){
        $('li').css("text-decoration", "line-through")
    })
})