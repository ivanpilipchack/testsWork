$(document).ready(() => {
    //variables for animated dropDown menu
    const $burger = $('.menu_logo');
    const $dropdown = $('.widget');
    const $burgerEls = $('.logo_el');
    const $contact = $('.active');
    const $subMenu = $('.sub');
    const $menuText = $('.dropdown');
    const $deferentIcons = $('.burger');


    $burger.on('click', () => {
        $dropdown.fadeToggle(700, 'linear', () => {
            $dropdown.toggleClass('opacity');
            $burger.toggleClass('add');
            $deferentIcons.toggleClass('active_logo');

        });
    });
    $menuText.on('mouseenter', () => {
        $(event.currentTarget).addClass('transform').animate({
            paddingLeft: '80px',
            opacity: '0.7'
        }, 500).on('mouseleave', () => {
            $(event.currentTarget).removeClass('transform').animate({
                paddingLeft: '15px',
                opacity: '1'

            }, 500);
        });
    });

    //subMenu
    $contact.on('mouseenter', () => {
        $subMenu.fadeIn(400, 'linear');
    });
    // accordions
    $('.accordion_head').on('click', (event) => {
        $(event.currentTarget).siblings().slideToggle(500, 'linear', () => {
            $(event.currentTarget).parent().toggleClass('opacity');
            $(event.currentTarget).parent().toggleClass('transform_accordions');
        });
    });
    $('.previous').on('click', (event) => {
        $(event.currentTarget).toggleClass('add_accordins');
    });
    //user dropDown
    const $user = $('.icons_profile:last');
    const $socialIcons = $('.icons_wrap');

    $user.on('click', () => {
        $socialIcons.slideDown(600, 'linear', () => {
            $socialIcons.toggleClass('opacity');
            $user.attr('src', 'img/internet.png')
                .hide().delay(300).fadeIn(400).delay(300).toggleClass('user');
        });
        $socialIcons.on('mouseleave', () => {
            $socialIcons.slideUp('600', () => {
                $user.attr('src', 'img/login-icon.jpg').delay(400).show(400);
            });

        });
    });
    //menuOffset 
    const $focus = $('.icons_list')
    const $iconRigth = $('.fa');
    const $textLeft = $('.icon_text');

    $focus.on('mouseenter', () => {
        $(event.currentTarget).addClass('addText').animate({
            marginLeft: '70px',

        }, 500).on('mouseleave', () => {
            $(event.currentTarget).animate({
                marginLeft: '0px'
            })
        });
    });

    // section icons
    const $hover = $('.icons_list:first');
    const $hoverNext = $('.next');
    const $facebook = $('.two');
    const $twitter = $('.prev');
    //facebook
    $hover.on('mouseenter', () => {
        $facebook.attr('src', 'img/ok.png').delay(300).fadeIn(400);
    }).on('mouseleave', () => {
        $facebook.attr('src', 'img/follow.png').fadeIn(300);
    });
    //twitter
    $hoverNext.on('mouseenter', () => {
        $twitter.attr('src', 'img/ok.png').delay(300).fadeIn(400);
    }).on('mouseleave', () => {
        $twitter.attr('src', 'img/follow.png').fadeIn(300);
    });
    //slider animated
    //value forms 
    const $hint = $('.sign_example');
    const $email = $('.email');

    $email.on('keyup', (event) => {
        $hint.html($(event.currentTarget).val(), () => {
            $hint.addClass('opacity');
        });
    });


});