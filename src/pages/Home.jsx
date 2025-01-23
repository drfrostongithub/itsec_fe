// import { useEffect } from "react";
import Authbox from "../components/Authbox";
import KanbanBoard from "../components/KanbanBoard";
import useAuthStore from "../store/useAuthStore";

function Home() {
  // const access_token = sessionStorage.getItem("access_token");
  const accessToken = useAuthStore((state) => state.accessToken);

  // Load token from session storage on app load
  // useEffect(() => {
  //   const access_token = sessionStorage.getItem("access_token");
  // }, []);

  return (
    <div className="container mx-auto p-4">
      <p className="mb-4">
        Welcome to your Kanban board! Here you can manage your tasks
        efficiently.
      </p>
      {!accessToken ? <Authbox /> : <KanbanBoard />}
    </div>
  );
}

export default Home;
