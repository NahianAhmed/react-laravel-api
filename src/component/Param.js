import React, { Component } from 'react'

export default class Param extends Component {
    render() {
        return (
            <div>
                Your param is {this.props.match.params.id}
            </div>
        )
    }
}
