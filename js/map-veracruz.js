function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 19.175949, lng: -96.168498 },
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map'
            ]
        },
        streetViewControl: false
    });
    /* ### Fin Mapa con las coordenadas ### */

    /* ### Estilos del mapa ### */
    var styledMapType = new google.maps.StyledMapType(
        [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#181818"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1b1b1b"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#2c2c2c"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8a8a8a"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#373737"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3c3c3c"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#4e4e4e"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#3d3d3d"
                }]
            }
        ], { name: 'Intimísimo' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    /* ### Fin Estilos del mapa ### */

    /* ### Íconos en el mapa ### */
    var icon = 'img/core-img/favicon.png';
    /* ### Sucursal Aeropuerto ### */
    var contentAeropuerto = '<div class="info-window">' +
        '<h3>Sucursal Aeropuerto</h3>' +
        '<div class="info-content">' +
        '<p>Calle 5 esquinacalle 1 Col. San José.</p>' +
        '</div>' +
        '</div>';

    var infowindowAeropuerto = new google.maps.InfoWindow({
        content: contentAeropuerto
    });

    var aeropuerto = new google.maps.Marker({
        position: { lat: 19.162267, lng: -96.208258 },
        map: map,
        icon: icon,
        title: 'Sucursal Aeropuerto'
    });

    aeropuerto.addListener('click', function() {
        infowindowAeropuerto.open(map, aeropuerto);
    });
    /* ### Sucursal Miguel Alemán ### */
    var contentMiguel = '<div class="info-window">' +
        '<h3>Sucursal Miguel Alemán</h3>' +
        '<div class="info-content">' +
        '<p>Av. Miguel Alemán esquina Juan Enríquez.</p>' +
        '</div>' +
        '</div>';

    var infowindowMiguel = new google.maps.InfoWindow({
        content: contentMiguel
    });

    var miguel = new google.maps.Marker({
        position: { lat: 19.183140, lng: -96.136008 },
        map: map,
        icon: icon,
        title: 'Sucursal Miguel Alemán'
    });

    miguel.addListener('click', function() {
        infowindowMiguel.open(map, miguel);
    });
    /* ### Fin Íconos en el mapa ### */
}