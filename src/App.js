import React, { Component } from 'react';
import './App.scss';

// Database Config Stuff
import firebase from 'firebase/app';
import { DB_CONFIG } from './Config/config';

// Components
import Notes from './Components/Notes/Notes';
import NotesForm from './Components/NotesForm/NotesForm';

class App extends Component {

  constructor(props){
    super(props)

    this.addNote = this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    // this.db = this.app.database().ref().child('notes')

    this.state = {
      notes: []
    };
  };

  // Lifecycle Methods
  componentWillMount() {
    
  }


  // Logic to add notes
  addNote(note) {

    // const currentNotesArray = this.state.notes;
    // currentNotesArray.push({ id: currentNotesArray.length + 1, content: note });

    // this.setState({
    //   notes: currentNotesArray

    // });
  };

  render() {
      return (
        <div className="App-header">
          <div className="notes-wrapper">
            <div className="notes-header">
              <div className="heading">
                React & Firebase To-Do List
              </div>
            </div>
            <div className="notes-content">
              {
                this.state.notes.map((note) => {
                  // console.log(note)
                  return(
                    <Notes noteContent={note.content} noteId={note.id} key={note.id} />
                  )
                })
              }
            </div>
            <div className="notes-form">
              <NotesForm addNote={ this.addNote } />
            </div>
            {/* <div className="footer">

            </div> */}
          </div>
        </div>

      );
  };
};


Notes.propTypes = {

};

export default App;
