<template>
  <div class="add-first">
    <h2>日付を入力してね</h2>
    <router-link to="/add/second">
      <AtomButton class="button" text="次へ" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "AddFirst",
  components: {
    AtomButton,
  },
});
</script>

<style scoped>
</style>
