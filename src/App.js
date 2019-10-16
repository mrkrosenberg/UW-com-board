import React, { Component } from 'react';
import './App.scss';

// Components
import Notes from './components/Notes/Notes';
import NotesForm from './components/NotesForm/NotesForm';

class App extends Component {

  constructor(props){
    super(props)

    this.addNote = this.addNote.bind(this);

    this.state = {
      notes: [
        {
          id: 1,
          content: 'one note'
        },
        {
          id: 2,
          content: 'two note'
        },
        {
          id: 3,
          content: 'red note'
        },
        {
          id: 4,
          content: 'blue note'
        }
      ]
    };
  };

  addNote(note) {

    const currentNotesArray = this.state.notes;
    currentNotesArray.push({ id: currentNotesArray.length + 1, content: note });

    this.setState({
      notes: currentNotesArray
    });

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
                  console.log(note)
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
