<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ state.data }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Home",
  setup() {
    let state = reactive({
      data: [],
    });

    function getApiResponce() {
      alert('aaaaaaaaa');
      axios.get("http://127.0.0.1:8000/api/post_date").then((response) => (state.data = response.data));
    }

    onMounted(() => {
      getApiResponce();
    });

    return {
      state,
    };
  },
});
</script>
