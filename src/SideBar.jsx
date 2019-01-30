import React, { Component } from 'react';
import HijoDeSideBar from "./HijoDeSideBar"

export default class SideBar extends Component {
    render() {
        console.log("render SideBar")
        return (
            <div>
                <HijoDeSideBar /> 
            </div>
        );
    }
}

