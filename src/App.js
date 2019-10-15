import React, { Component } from 'react';
import './App.scss';

// Components
import Notes from './components/Notes/Notes';
import NotesForm from './components/NotesForm/NotesForm';

class App extends Component {

  constructor(props){
    super(props)

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
    }


  }

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
            <div className="notesFooter">
              <NotesForm />
            </div>
            <div className="footer">

            </div>
          </div>
        </div>

      );
  }
  }


Notes.propTypes = {

}

export default App;
