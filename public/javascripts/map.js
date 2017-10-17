var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(47.236326, 8.820226),
        mapTypeId: 'roadmap',
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.AUTO,
            mapTypeIds: ['roadmap', 'hybrid'],
        },
        styles: [
            {
                featureType: 'poi',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            }
        ]
    });

    var iconBase = 'img/';
    var icons = {
        parking: {
            icon: './images/car.png'
        },
        schuur: {
            icon: './images/bar.png'
        }
    };

    var features = [
        {
            position: new google.maps.LatLng(47.236201, 8.819990),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(47.236389, 8.820497),
            type: 'schuur'
        }
    ];



    var contentStringSchuur = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<p><b>Schüür</b><br>Meienbergstrasse 7<br> 8645 Jona</p>'+
        '</div>'+
        '</div>';


    var infowindowSchuur = new google.maps.InfoWindow({
        content: contentStringSchuur
    });




    features.forEach(function(feature) {

        var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
        });
            infowindowSchuur.open(map, marker);
    });




}
