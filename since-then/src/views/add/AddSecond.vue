<template>
  <div class="add-second">
    <h2>何があった日？</h2>
    <AtomButton class="button" text="追加" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "AddSecond",
  components: {
    AtomButton,
  },
});
</script>

<style scoped></style>
