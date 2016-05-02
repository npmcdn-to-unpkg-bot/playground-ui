/**
 * Created by leow on 4/21/16.
 */
"use strict";

// Assumes "this" context must be passed in from main GMaps component via .call or .bind

let util = require('util')

// Hide all internal implementation here ...
// See parent vue for the data strucutures being passed around ..
function _initGmaps() {
    // Assumes: these will be called and passed the correct context; so we will have the needed variables .. :P
    // Only do something if it is NOT set ..
    if (this.mymap === null) {
        // Init ..
        let final_lat;
        let final_lng;

        // Figure out which is the lat, lng; possibly redundant??
        if (
            !(this.mylat === null || this.mylat === undefined)
            && !(this.mylng === null || this.mylng === undefined)
        ) {
            final_lat = this.mylat;
            final_lng = this.mylng;
            // console.log("Scenario #1: init process ... Lat is " + final_lat + " Lng is " + final_lng)

        } else if (
            !(this.location_marker.lat === null || this.location_marker.lat === undefined || this.location_marker.lat === "")
            && !(this.location_marker.lng === null || this.location_marker.lng === undefined || this.location_marker.lng === "")

        ) {
            // console.log("Scenario #2: init process ... Lat is " + this.location_marker.lat +
            //        " Lng is " + this.location_marker.lng)
            final_lat = this.location_marker.lat;
            final_lng = this.location_marker.lng;
        } else {
            console.log("Cannot init!")
        }

        // OK, now create the Map and Marker ... the hooking is done since context is passed in it
        _setupMapMarker.call(this, final_lat, final_lng)

    } else {
        // Initialized already; nothing further to do; a singleton .. yuck!
    }
}

function _setupMapMarker(final_lat, final_lng) {
    // Assumes this called with the .call to pass in the correct context .. yuck!

    this.mymap = new GMaps({
        div: '#map-' + this.mapid,
        lat: final_lat,
        lng: final_lng,
        dragend: (e) => {
            let lat = e.getCenter().lat();
            let lng = e.getCenter().lng();
            console.log("DRAGEND --> Lat: " + lat + " Lng: " + lng);
            this.location_marker.lat = lat
            this.location_marker.lng = lng
        }
    });

    this.mymarker = this.mymap.addMarker({
        lat: final_lat,
        lng: final_lng,
        title: 'Current Location',
        draggable: true,
        dragend: (e) => {
            // Debug
            // console.log(util.inspect(e, { showHidden: true, depth: null }))
            let lat = e.latLng.lat();
            let lng = e.latLng.lng();
            this.location_marker.lat = lat
            this.location_marker.lng = lng
            console.log("Centering on .. Lat: " + lat + " Lng: " + lng);
            this.mymap.setCenter(lat, lng)
        },
        click: (e) => {
            alert('You clicked in this marker' + util.inspect(e));
        }

    });
}

function _refreshGeoLocation(callThisWhenHavePosition, mylat = null, mylng = null) {

    // Have those graphics to click to reestablish location ...
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Get the detail as needed
                this.location_marker.lat = position.coords.latitude
                this.location_marker.lng = position.coords.longitude
                // This is tied deeply but OK ler ...
                if (!(callThisWhenHavePosition === null)) {
                    callThisWhenHavePosition.call(this)
                }
            },
            (err) => {
                console.error("ERR: " + err.message + " Using default ..")
                this.location_marker.lat = mylat;
                this.location_marker.lng = mylng;
                if (!(callThisWhenHavePosition === null)) {
                    callThisWhenHavePosition.call(this)
                }
            }
        )

        navigator.geolocation.watchPosition(
            (position) => {
                // Update the positions ..
                this.location_marker.lat = position.coords.latitude
                this.location_marker.lng = position.coords.longitude
                // Update GMaps marker?
                this.mymarker.setPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (err) => {
                console.error("ERR: =>", err.message)
            }
        )
    } else {
        // DO nothing ... just quit with null??
    }
}

function _renderGeoJSON(geojson, options) {

    // Create object with the necessary options??

    // Attach it to the map??
    let new_polygon_properties = Object.assign({
        paths: geojson,
        useGeoJSON: true
    }, options)
    return new_polygon_properties

}

function _findGeoJSONCenter() {
    // Given GeoJSON; return back LatLng needed by GMaps API
}

// Exports only of Public API ; cause in it; if bind via call; this gets mixed up
module.exports = {

    initGmaps: function () {
        _initGmaps.call(this)
    },
    findGeoLocation: function () {
        // Init variables; default values filled ..
        let mylat = "3.079";
        let mylng = "101.468";

        // It will need to handle itself; but passes a default ..
        _refreshGeoLocation.call(this, _initGmaps, mylat, mylng);
    },
    refocusSelectedArea: function (geojson) {
        // Using the GeoJSON returned
        // _findGeoJSONCenter
        // Zoom to fill it and move Marker to returned Location

        // use Map function to panBound
        // using the geojson above ..


        let par_options = {
            strokeColor: '#BBD8E9',
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: '#BBD8E9',
            fillOpacity: 0.5
        }
        // _renderGeoJSON
        return _renderGeoJSON(geojson, par_options)
    }

}