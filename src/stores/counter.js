import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const testClosureStore = defineStore("testClosureStore", {
  state: () => ({
    user: null,
  }),
  getters: {},
  actions: {
    getRadomUser(fn) {
      setTimeout(() => {
        axios
          .get("https://randomuser.me/api/")
          .then((res) => {
            // console.log(res);
            this.user = res;
            fn();
          })
          .catch((err) => {
            console.error(err);
          });
      }, "2000");
    },
  },
});
