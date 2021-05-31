import React, {Component} from 'react' 


class DelayedButton extends Component {

handleDelay = (e) => {
    let e = this.props.delay
    setTimeout(() => {
        this.props.onDelayedClick(e)
    })
    
}

render() {
    return(
        <button
        onClick = {this.handleDelay}
        >
            Delayed
        </button>
        )
    }
}

export default DelayedButton
