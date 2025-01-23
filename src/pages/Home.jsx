// import { useEffect } from "react";
import Authbox from "../components/Authbox";
import KanbanBoard from "../components/KanbanBoard";
import useAuthStore from "../store/useAuthStore";

function Home() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const user = useAuthStore((state) => state.user);

  return (
    <div className="container mx-auto p-4">
      <p className="mb-4">
        Welcome to your Kanban board! Here you can manage your tasks
        efficiently.
      </p>
      {!accessToken && !user ? <Authbox /> : <KanbanBoard />}
    </div>
  );
}

export default Home;
