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

    function showProjectDetails(jQueryObj) {
        jQueryObj.attr('href', '#projectDetails');
        jQueryObj.text('Less Details');
        jQueryObj.addClass('active-details');
        $('#projectDetails > *').addClass('d-none');
        $('#projectDetails').removeClass('d-none');
    }

    $('#freshDetailsLink').on('click', function() {
        const $this = $(this);
        if ($this.hasClass('active-details')) {
            hideProjectDetails($this);
        } else {
            showProjectDetails($this);
            $('#freshDetails').removeClass('d-none');
        }
    });

    $('#cellarDetailsLink').on('click', function() {
        const $this = $(this);
        if ($this.hasClass('active-details')) {
            hideProjectDetails($this);
        } else {
            showProjectDetails($this);
            $('#cellarDetails').removeClass('d-none');
        }
    });

    $('#memoryDetailsLink').on('click', function() {
        const $this = $(this);
        if ($this.hasClass('active-details')) {
            hideProjectDetails($this);
        } else {
            showProjectDetails($this);
            $('#memoryDetails').removeClass('d-none');
        }
    });

});
