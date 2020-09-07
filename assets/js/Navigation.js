$(function () {
    var defaultOptions = {
        container: document.body,
        panelSelector: 'section',
        directionThreshold: 20,
        delay: 0,
        duration: 400,
        easing: function (t) {
            return t
        },
    };
    
    let count = 0
    new PanelSnap(defaultOptions);

    $('#scrollUp').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })




    //     Setup Clicks for nav
    $('#home').click(() => {
        $('section.intro').each((i, el) => {
            $(el).removeClass('hidesection')
        })
        $('section.dialogues').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('section.systems').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('html, body').animate({
            scrollTop: $("#intro-top").offset().top
        }, 500);



    })
    $('#dialogues').click(() => {
        $('section.intro').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('section.dialogues').each((i, el) => {
            $(el).removeClass('hidesection')
        })
        $('section.systems').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('section.knowledge').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('html, body').animate({
            scrollTop: $("#dialogues-top").offset().top
        }, 500);
    })


    $('#systems').click(() => {
        $('section.intro').each((i, el) => {
            $(el).addClass('hidesection')
        })

        $('section.dialogues').each((i, el) => {
            $(el).addClass('hidesection')
        })

        $('section.systems').each((i, el) => {
            $(el).removeClass('hidesection')
        })
        $('section.knowledge').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('html, body').animate({
            scrollTop: $("#systems-top").offset().top
        }, 500);
    })

    $('#knowledge').click(() => {
        $('section.intro').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('section.dialogues').each((i, el) => {
            $(el).addClass('hidesection')
        })
        $('section.systems').each((i, el) => {
            $(el).addClass('hidesection')
        })

        $('section.knowledge').each((i, el) => {
            $(el).removeClass('hidesection')
        })
        $('html, body').animate({
            scrollTop: $("#knowledge-top").offset().top
        }, 500);



    })
});