import React from "react";

function Column({ title, tasks }) {
  return (
    <div className="bg-gray-200 rounded-lg p-4 m-2 w-64">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded p-2 mb-2 shadow">
            <h3 className="font-semibold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;
