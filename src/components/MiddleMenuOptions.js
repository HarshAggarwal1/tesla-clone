import React from 'react'
import Vehicles from './middle-menu-components/Vehicles'
import Energy from './middle-menu-components/Energy'
import Charging from './middle-menu-components/Charging'
import Discover from './middle-menu-components/Discover'
import Shop from './middle-menu-components/Shop'

function MiddleMenuOptions(props) {
    if (props.option === "Vehicles") {
        return (
            <Vehicles />
        )
    }
    else if (props.option === "Energy") {
        return (
            <Energy />
        )
    }
    else if (props.option === "Charging") {
        return (
            <Charging />
        )
    }
    else if (props.option === "Discover") {
        return (
            <Discover />
        )
    }
    else if (props.option === "Shop") {
        return (
            <Shop />
        )
    }
    else {
        return (
            <div>
                <h1>Something went wrong!</h1>
            </div>
        )
    }
}

export default MiddleMenuOptions