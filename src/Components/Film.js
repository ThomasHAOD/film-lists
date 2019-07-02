import React, { Component, Fragment } from 'react'

class Film extends Component{

    render(){
        return(
            <div>
                <a href={this.props.url}>{this.props.name}</a>
                <br></br>
            </div>
            
        )
    }


}

export default Film