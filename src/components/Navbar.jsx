import useAuthStore from "../store/useAuthStore";

function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  const accessToken = sessionStorage.getItem("accessToken");
  const user = useAuthStore((state) => state.user);
  console.log(user);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">
          {accessToken && user ? `Welcome, ${user.username}` : "Kanban Board"}
        </h1>
        {accessToken && user ? (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
