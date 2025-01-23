// import { useEffect } from "react";
import Authbox from "../components/Authbox";
import KanbanBoard from "../components/KanbanBoard";

function Home() {
  const access_token = sessionStorage.getItem("access_token");
  // Load token from session storage on app load
  // useEffect(() => {
  //   const access_token = sessionStorage.getItem("access_token");
  // }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <p className="mb-4">
        Welcome to your Kanban board! Here you can manage your tasks
        efficiently.
      </p>
      {!access_token ? <Authbox /> : <KanbanBoard />}
    </div>
  );
}

export default Home;
