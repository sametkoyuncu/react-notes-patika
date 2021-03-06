import { useState } from 'react'
import NoteCard from './components/NoteCard'
import EditModal from './components/EditModal'
import AddModal from './components/AddModal'
import { useNote } from './context/NoteContext'
import './App.css'
import AddNoteBtn from './components/AddNoteBtn'

function App() {
  const [modal, setModal] = useState(false)
  const [addModal, setAddModal] = useState(false)
  const [selectedNoteId, setSelectedNoteId] = useState(null)
  const [selectedNoteTitle, setSelectedNoteTitle] = useState(null)
  const [selectedNoteText, setSelectedNoteText] = useState(null)
  const { notes, setNotes } = useNote()

  const selectedNote = {
    selectedNoteId,
    selectedNoteTitle,
    selectedNoteText,
    setSelectedNoteId,
    setSelectedNoteTitle,
    setSelectedNoteText,
  }

  // modal'a gönderilecek note'u seçme
  const showModal = (id) => {
    let note
    try {
      note = notes.filter((note) => note.id === id)
      setSelectedNoteId(note[0].id)
      setSelectedNoteTitle(note[0].title)
      setSelectedNoteText(note[0].text)
    } finally {
      setModal(true)
    }
  }

  const showAddModal = () => {
    setAddModal(true)
  }

  const deleteNote = (id) => {
    let _notes = notes.filter((note) => note.id !== id)
    setNotes([..._notes])
  }

  return (
    <div className="w-full min-h-screen bg-sky-300">
      <div className="container mx-auto px-4 pt-6">
        <AddNoteBtn showAddModal={showAddModal} />
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            showModal={showModal}
            deleteNote={deleteNote}
            note={note}
          />
        ))}
      </div>
      {modal && <EditModal setModal={setModal} selectedNote={selectedNote} />}
      {addModal && <AddModal setAddModal={setAddModal} />}
    </div>
  )
}

export default App
