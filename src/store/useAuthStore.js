import { create } from "zustand";
import axios from "axios";

const API_URL = "https://678bd3801a6b89b27a2b93bc.mockapi.io/itsec";

const useAuthStore = create((set) => ({
  accessToken: sessionStorage.getItem("access_token") || null,
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  error: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
  handleAuth: async (isLogin, username, password) => {
    if (isLogin) {
      try {
        const response = await axios.get(`${API_URL}/Users`);
        const user = response.data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          set({ accessToken: user.id, user, error: null });
          sessionStorage.setItem("accessToken", user.id);
          sessionStorage.setItem("user", JSON.stringify(user));
        } else {
          set({ error: "Invalid username or password" });
        }
      } catch (err) {
        set({
          error:
            err.response?.data?.message ||
            "An error occurred while fetching users",
        });
      }
    } else {
      try {
        await axios.post(`${API_URL}/Users`, {
          username,
          password,
        });
        alert("Registration successful. Please log in.");
        set({ isLogin: true, error: null });
      } catch (err) {
        set({ error: err.response?.data?.message || "An error occurred" });
      }
    }
  },
  logout: () => {
    set({ accessToken: null, user: null });
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");
  },
}));

export default useAuthStore;
