<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ postDate }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  setup() {
    let state = reactive({
      data: [],
    });

    const store = useStore(key); // $storeではなくuseStore()で取得する

    // storeに格納されているDrfPostDateを取得
    const postDate = computed(() => store.getters.getDrfPostDate);

    async function getApiResponce() {
      await axios
        .get("http://127.0.0.1:8000/api/post_date") // GET post_date一覧取得
        .then((response) => (
          store.commit("setDrfResponcePostDate", response.data)
        ));
    }

    onMounted(() => {
      getApiResponce();
    });

    return {
      state,
      store,
      postDate,
    };
  },
});
</script>
