import React, { Component } from 'react';
import './App.scss';

// Database Config Stuff
import Firebase from '../src/Config/config';

// Components
import Notes from './Components/Notes/Notes';
import NotesForm from './Components/NotesForm/NotesForm';

class App extends Component {

  constructor(props){

    super(props)

    this.addNote = this.addNote.bind(this);

    this.app = Firebase;
    this.db = this.app.firestore().collection('notes');

    this.state = {
      notes: []
    };

  };

  // Lifecycle Methods
  componentDidMount() {

    const currentNotes = this.state.notes;

    this.db.get().then((snapshot) => {
      console.log(snapshot)
      // snapshot.docs.forEach((doc) => {
      //   console.log(doc.data());
      //   currentNotes.push({
      //     id: doc.key,
      //     title: doc.data().title,
      //     body: doc.data().body
      //   })
      // })

      // this.setState({
      //   notes: currentNotes
      // })
    });
  };


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
                  console.log('notes: ', note)
                  return(
                    <Notes noteContent={note.body} noteTitle={note.title} key={note.id} />
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
