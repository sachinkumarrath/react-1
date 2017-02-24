import React, {Component} from 'react';
import PlaceUtils from "./GoogleMapsUtils";

export default class PlaceSearch extends React.Component{
    constructor(){
        super();
        this.state = {
            seachText : ""
        }
        this.searchPlace = this.searchPlace.bind(this);
    }

    searchPlace(){
        PlaceUtils.getPlaces(this.searchPlaceText.value);
    }

    render(){
        return (
            <input ref={searchPlaceText => this.searchPlaceText = searchPlaceText}
                type="text"
                onKeyUp={this.searchPlace}
                name="street"
                placeholder="street name"/>
        );
    }
}
