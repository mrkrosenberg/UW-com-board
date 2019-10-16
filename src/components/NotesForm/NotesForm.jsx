import React, { Component } from 'react'
// import PropTypes from 'prop-types'


// Stylesheet
import './NotesForm.scss';

export class NotesForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newNote: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    };

    handleInput(e) {
        // console.log(this);
        this.setState({
            newNote: e.target.value
        });
    };

    writeNote() {

        this.props.addNote(this.state.newNote);

        this.setState({
            newNote: ''
        });
    };


    render() {
        return (
            <div className="formWrapper">
                <input  type="text" 
                        className="noteInput" 
                        placeholder="Enter note here..." 
                        value={ this.state.newNote }
                        onChange={ this.handleInput }/>
                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
                <button className="postButton"
                        onClick={this.writeNote}
                >Add Note</button>
            </div>
        )
    };
};

export default NotesForm;
