function Task({ task, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="font-bold text-lg">{task.title}</h2>
      <p className="text-gray-700">{task.description}</p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => onEdit(task.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
