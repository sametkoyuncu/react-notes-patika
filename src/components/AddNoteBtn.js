function AddNoteBtn({ showAddModal }) {
  return (
    <div className="w-full flex justify-end px-4">
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
        onClick={() => showAddModal()}
      >
        Not Ekle
      </button>
    </div>
  )
}

export default AddNoteBtn
