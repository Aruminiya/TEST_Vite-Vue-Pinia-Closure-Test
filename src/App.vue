<script>
import { mapState, mapActions } from "pinia";
import { testClosureStore } from "./stores/counter.js";

export default {
  data() {
    return {
      num: 0,
    };
  },
  computed: {
    ...mapState(testClosureStore, ["user"]),
  },
  methods: {
    ...mapActions(testClosureStore, ["getRadomUser"]),
    shoeName() {
      setInterval(() => {
        this.num++;
      }, "1000");
    },
  },
  mounted() {
    this.getRadomUser(() => {
      this.shoeName();
    });
  },
};
</script>

<template>
  <div>
    <h1 v-if="user === null">Loading...</h1>
    <h1 v-else>
      <img :src="user.data?.results[0].picture.large" alt="photo" />
      <br />
      {{ user.data?.results[0]?.name.title }}
      {{ user.data?.results[0]?.name.first }}
      {{ user.data?.results[0]?.name.last }}
    </h1>
  </div>

  <h2>得到人物資料已經過： {{ num }} 秒鐘</h2>
</template>
