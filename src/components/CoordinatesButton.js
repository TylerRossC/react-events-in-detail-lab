import React, {Component} from 'react' 


class CoordinatesButton extends Component {

handleCoordinates = (e) => {
let x = e.clientX
let y = e.clientY
let coords = [x, y]
this.props.onReceiveCoordinates(coords)
}

render() {
    return(
        <button 
        onClick = {this.handleCoordinates}
        >
            Receive 
        </button>
        )
    }
}

export default CoordinatesButton
