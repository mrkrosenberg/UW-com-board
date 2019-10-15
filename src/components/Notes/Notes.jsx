import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Stylesheet
import './Notes.scss'

export class Notes extends Component {

    constructor(props) {
        super(props);
        // this.noteContent = props.noteContent
        // this.noteId = props.noteId
        this.note = {
            content: props.noteContent,
            id: props.noteId
        }
    }


    render(props) {
        return (
            <div className="note fade-in">
                <div className="noteContent">
                    <h1>{ this.note.content }</h1>
                    <p>{ this.note.id }</p>
                </div>
            </div>
        )
    }
}

Notes.propTypes = {
    note: PropTypes.object
}

export default Notes
