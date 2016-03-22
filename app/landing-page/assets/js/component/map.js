$(function(){
    $(window).load(function(){
        "use strict";
        
        // set your google maps parameters
        var $latitude = 50.79124, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = 0.30779,
            $map_zoom = 16; /* ZOOM SETTING */

        // google map custom marker icon
        var $marker_url = 'assets/img/map-marker.png';
        
        // we define here the style of the map
        var style = [{
            "stylers": [{
                "hue": "#00aaff"
            }, {
                "saturation": -100
            }, {
                "gamma": 2.15
            }, {
                "lightness": 12
            }]
        }];

        // set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        };
        // inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    
        //add a custom marker to the map				
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });


// trying to do the radius couldn't get it to work will fix later
//        var citymap = {
//          Eastbourne: {
//            center: {lat: 50.79124, lng: 0.30779},
//          },
//        };
//
//          // Construct the circle for each value in citymap.
//          // Note: We scale the area of the circle based on the population.
//          for (var city in citymap) {
//            // Add the circle for this city to the map.
//            var cityCircle = new google.maps.Circle({
//              strokeColor: '#FF0000',
//              strokeOpacity: 0.8,
//              strokeWeight: 2,
//              fillColor: '#FF0000',
//              fillOpacity: 0.35,
//              map: map,
//              center: citymap[city].center,
//              radius: 25
//            });
//          }
//        }

    });
});