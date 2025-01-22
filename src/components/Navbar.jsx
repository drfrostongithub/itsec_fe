function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Kanban Board</h1>
        <div>
          <a href="/login" className="text-white px-4">
            Login
          </a>
          <a href="/register" className="text-white px-4">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
