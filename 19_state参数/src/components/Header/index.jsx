import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'

// function Header(props) {
//     back = () => {
//         props.history.goBack()
//     }
//     return (
//         <div>
//             <h3>React Router Demo</h3>
//             <button onClick={this.back}>回退</button>
//         </div>
//     )
// }
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <h3>React Router Demo</h3>
                <button onClick={this.back}>回退</button>
            </div>
        )
    }
}
export default withRouter(Header)
