$(function () {

    lightbox.option({
        'resizeDuration': 200
    });

    // ---------------------------------------------------------- //
    // Smooth scrolling
    // ---------------------------------------------------------- //
    var scroll = new SmoothScroll('a.link-scroll', {
        speed: 500,
        speedAsDuration: true,
        offset: 20,
        easing: 'easeInOutQuad'
    });


    // ---------------------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------------------- //
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    // ---------------------------------------------------------- //
    // Close navbar on click on mobiles
    // ---------------------------------------------------------- //

    $('.navbar .link-scroll').on('click', function () {
        if ($(window).outerWidth() <= 985) {
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').attr('aria-expanded', 'false');
        }
    })

    // ---------------------------------------------------------- //
    // Project Details Click Handlers
    // ---------------------------------------------------------- //

    function hideProjectDetails(jQueryObj) {
        jQueryObj.attr('href', '#projects');
        jQueryObj.text('More Details');
        jQueryObj.removeClass('active-details');
        $('#projectDetails > *').addClass('d-none');
        $('#projectDetails').addClass('d-none');
    }

    $('#freshDetailsLink').on('click', function() {
        const $this = $(this);
        if ($this.hasClass('active-details')) {
            hideProjectDetails($this);
        } else {
            $this.attr('href', '#projectDetails');
            $this.text('Less Details');
            $this.addClass('active-details');
            $('#projectDetails > *').addClass('d-none');
            $('#projectDetails').removeClass('d-none');
            $('#freshDetails').removeClass('d-none');
        }
    })

});
