import { useState } from 'react'
import NoteCard from './components/NoteCard'
import EditModal from './components/EditModal'
import { useNote } from './context/NoteContext'
import './App.css'

function App() {
  const [modal, setModal] = useState(false)
  const [selectedNote, setSelectedNote] = useState(null)
  const { notes } = useNote()

  // modal'a gönderilecek note'u seçme
  const showModal = (id) => {
    let note
    try {
      note = notes.filter((note) => note.id === id)
      setSelectedNote(note[0])
    } finally {
      setModal(true)
    }
  }

  const updateNote = (note) => {
    const index = notes.indexOf(note.id)
    notes[index].title = note.title
    notes[index].text = note.text
  }

  return (
    <div className="w-full min-h-screen bg-sky-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
        {notes.map((note) => (
          <NoteCard key={note.id} showModal={showModal} note={note} />
        ))}
      </div>
      {modal && (
        <EditModal
          setModal={setModal}
          selectedNote={selectedNote}
          updateNote={updateNote}
        />
      )}
    </div>
  )
}

export default App
