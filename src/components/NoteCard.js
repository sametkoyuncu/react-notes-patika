function NoteCard({ showModal, note, deleteNote }) {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg bg-white rounded-xl hover:shadow-xl hover:shadow-sky-600 transition-all">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{note.title}</div>
        <p className="text-gray-700 text-base">{note.text}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end space-x-2">
        <button
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded-full"
          onClick={() => showModal(note.id)}
        >
          Düzenle
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-full"
          onClick={() => deleteNote(note.id)}
        >
          Sil
        </button>
      </div>
    </div>
  )
}

export default NoteCard
