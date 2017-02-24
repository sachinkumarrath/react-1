import $ from "jquery";


export default class PlacesUtils {

    constructor(props) {

    }



    static getPlaces(searchText){
        var inputParams = {
            key: PlacesUtils.licenseKey,
            input: searchText
        };

        this._getResponseFromService($.param(inputParams)).then(function(response){
            console.log("reolve method",response);
        }).catch(function(error){
            console.log(error);
        });
        // console.log(searchText);
    }

    static _getResponseFromService(params) {
        // Build the set of items that need to be available in the select field if appropriate
        // return new Promise(function(){
        //
        // });
        // $.ajax
        // https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=3375&key=AIzaSyDwe0qraCAG7bOOtbfraQp9I48jr8pLjWY
        var placesURL = PlacesUtils.mapURL + params;

        return new Promise(function(resolve, reject){
            $.get( placesURL, function( data ) {
                // console.log();
                resolve(data);
            }).fail(reject);

        });
    }
}

PlacesUtils.mapURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
PlacesUtils.licenseKey = "AIzaSyDwe0qraCAG7bOOtbfraQp9I48jr8pLjWY";
