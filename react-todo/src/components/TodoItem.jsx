export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
       <li
      className={`flex justify-between items-center p-2 border-b cursor-pointer ${
        todo.completed ? "line-through text-gray-500" : ""
      }`}
      onClick={() => onToggle(todo.id)}
    >
        <span>{todo.text}</span>
        <button
        className="ml-2 bg-red-500 text-white px-2 rounded"
        onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
        }}
        >
            Delete
        </button>

        </li>
    );
}