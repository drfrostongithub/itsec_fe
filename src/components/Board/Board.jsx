import Column from "./Column";

const Board = () => {
  const columns = [
    { id: 1, title: "TO DO" },
    { id: 2, title: "DOING" },
    { id: 3, title: "DONE" },
  ];

  return (
    <div className="flex space-x-4 p-4">
      {columns.map((column) => (
        <Column key={column.id} title={column.title} />
      ))}
    </div>
  );
};

export default Board;
