import { createContext, useContext, useEffect, useState } from 'react'

const NoteContext = createContext()

const defaultNotes = [
  {
    id: 1,
    title: 'Note One',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    title: 'Note Two',
    text: 'Ipsun lorem dolor sit amet.',
  },
  {
    id: 3,
    title: 'Note Three',
    text: 'Dolor lorem ipsum sit amet.',
  },
  {
    id: 4,
    title: 'Note Four',
    text: 'Site lorem ipsum dolor amet.',
  },
]

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || defaultNotes
  )
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  //   const addNote = (note) => {
  //     setNotes(...notes, note)
  //   }
  //   // id var mı kontrolü eklenebilir
  //   const editNote = (id, note) => {
  //     notes[id] = note
  //     setNotes(notes)
  //   }
  //   const deleteNote = (id) => {
  //     const notes_ = notes.filter((note) => note.id !== id)
  //     setNotes(...notes_)
  //     }

  //     addNote,
  //     editNote,
  //     deleteNote,
  const values = {
    notes,
    setNotes,
  }
  return <NoteContext.Provider value={values}>{children}</NoteContext.Provider>
}

export const useNote = () => useContext(NoteContext)
