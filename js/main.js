$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    });
    $('.hamburger-menu').click(function(){
        $('nav').slideToggle();
    }) 

    $('#phone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            carIntrst: {
                required: false
            }
            },
            messages: {
                name: 'Please input your name and surname'
            },
            submitHandler: function(form) {
                alert("Your form has been sent!")
                form.reset();
            },
            invalidHandler: function(event,validator) {
                let invalidFields = validator.numberOfInvalids();
                if (invalidFields) {
                    alert(`There are ${invalidFields} invalid fields.`)
                }
        }
    })

    $('.car-list button').click(function(){
        const target = $('#contactUs');

        const carName = $(this).parent().find('h3').text();

        $('#car-intrst').val(carName);

        $('html').animate({
            scrollTop: target.offset().top
        }, 1000)
        
    })
})