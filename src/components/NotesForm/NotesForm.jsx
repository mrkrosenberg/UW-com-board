import React, { Component } from 'react'
import PropTypes from 'prop-types'


// Stylesheet
import './NotesForm.scss';

export class NotesForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newNote: ''
        }
    }


    render() {
        return (
            <div className="formWrapper">
                <input type="text" className="noteInput" placeholder="Enter note here..." value={ this.state.newNote }/>
                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                <button className="postButton">Add Note</button>
            </div>
        )
    }
}

export default NotesForm
