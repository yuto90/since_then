<template>
  <div class="atom-textarea">
    <textarea :placeholder="placeholder" :cols="cols" :rows="rows" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomInput",
  props: {
    placeholder: { type: String },
    cols: { type: String, default: "30" },
    rows: { type: String, default: "7" },
  },
});
</script>

<style scoped></style>
