function TodoItem({ todoName, todoDate, priority, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-700 text-white";
      case "Medium":
        return "bg-yellow-400 text-black";
      case "Low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-4 mb-4">
      <div className="w-full md:w-1/2 font-medium break-words whitespace-normal">
        <b className="font-sans text-lg">{todoName}</b>
      </div>

      <div className="w-full md:w-1/3 font-medium text-center mt-2 md:mt-0">
        <b className="font-black text-lg">{todoDate}</b>
      </div>

      <div className={`w-full md:w-auto  mt-2 md:mt-0 px-3 text-center py-1 text-lg rounded-lg font-semibold ${getPriorityColor(priority)}`}>
        {priority}
      </div>

      <div className="w-full md:w-auto mt-2 md:mt-0">
        <button
          type="button"
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 w-full md:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
