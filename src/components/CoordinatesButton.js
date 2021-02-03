// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class Coordinates extends Component {

    handleClick = (e) => {
        this.coords([e.clientX, e.clientY])
    }
    
    coords = (array) => this.props.onReceiveCoordinates(array)

    render () {
        console.log(this.props)
        return (
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}