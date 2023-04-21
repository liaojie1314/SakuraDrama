import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: "",
    isLoggedIn: false,
    userName: "",
    userId: 0,
  }),
  actions: {
    login(token, userName, userId) {
      this.isLoggedIn = true;
      this.token = token;
      this.userName = userName;
      this.userId = userId;
    },
    logout() {
      this.isLoggedIn = false;
      this.token = "";
      this.userName = "";
      this.userId = 0;
      localStorage.removeItem("pinia-state");
    },
  },
});
