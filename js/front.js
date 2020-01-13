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
    });

    // ---------------------------------------------------------- //
    // Map init
    // ---------------------------------------------------------- //

    map();

});

// ------------------------------------------------------ //
// styled Leaflet  Map
// ------------------------------------------------------ //

function map() {

    var mapId = 'map',
        mapCenter = [33.742086, -117.823642],
        mapMarker = true;

    if ($('#' + mapId).length > 0) {

        var icon = L.icon({
            iconUrl: 'img/marker.png',
            iconSize: [25, 37.5],
            popupAnchor: [0, -18],
            tooltipAnchor: [0, 19]
        });

        var dragging = false,
            tap = false;

        if ($(window).width() > 700) {
            dragging = true;
            tap = true;
        }

        var map = L.map(mapId, {
            center: mapCenter,
            zoom: 13,
            dragging: dragging,
            tap: tap,
            scrollWheelZoom: false
        });

        var Wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
            minZoom: 1,
            maxZoom: 19
        });

        Wikimedia.addTo(map);

        map.once('focus', function () {
            map.scrollWheelZoom.enable();
        });

        if (mapMarker) {
            var marker = L.marker(mapCenter, {
                icon: icon
            }).addTo(map);

            marker.bindPopup("<div><p class='font-weight-bold'>I live in Tustin, CA and am open to any opportunities in Orange County and South Los Angeles County.</p></div>", {
                minwidth: 200,
                maxWidth: 600,
                className: 'map-custom-popup'
            })

        }
    }

}
