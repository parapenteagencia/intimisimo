function initMap() {

    /* ### Mapa con las coordenadas ### */
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: 20.647969, lng: -87.079704 },
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
    /* ### Sucursal Ejido Sur ### */
    var contentEjido = '<div class="info-window">' +
        '<h3>Sucursal Ejido Sur</h3>' +
        '<div class="info-content">' +
        '<p>115 Av. sur esquina calle 23 sur.</p>' +
        '</div>' +
        '</div>';

    var infowindowEjido = new google.maps.InfoWindow({
        content: contentEjido
    });

    var ejido = new google.maps.Marker({
        position: { lat: 20.629564, lng: -87.101310 },
        map: map,
        icon: icon,
        title: 'Sucursal Ejido Sur'
    });

    ejido.addListener('click', function() {
        infowindowEjido.open(map, ejido);
    });
    /* ### Sucursal Constituyentes ### */
    var contentConstituyentes = '<div class="info-window">' +
        '<h3>Sucursal Constituyentes</h3>' +
        '<div class="info-content">' +
        '<p>Calle 85 con calle 30 Col. Ejidal.</p>' +
        '</div>' +
        '</div>';

    var infowindowConstituyentes = new google.maps.InfoWindow({
        content: contentConstituyentes
    });

    var constituyentes = new google.maps.Marker({
        position: { lat: 20.639017, lng: -87.085506 },
        map: map,
        icon: icon,
        title: 'Sucursal Constituyentes'
    });

    constituyentes.addListener('click', function() {
        infowindowConstituyentes.open(map, constituyentes);
    });
    /* ### Sucursal Carretera Federal ### */
    var contentFederal = '<div class="info-window">' +
        '<h3>Sucursal Carretera Federal</h3>' +
        '<div class="info-content">' +
        '<p>Carretera Cancún-Tulum km 294 frente al Grand Coral.</p>' +
        '</div>' +
        '</div>';

    var infowindowFederal = new google.maps.InfoWindow({
        content: contentFederal
    });

    var federal = new google.maps.Marker({
        position: { lat: 20.666357, lng: -87.054366 },
        map: map,
        icon: icon,
        title: 'Sucursal Carretera Federal'
    });

    federal.addListener('click', function() {
        infowindowFederal.open(map, federal);
    });
    /* ### Fin Íconos en el mapa ### */
}