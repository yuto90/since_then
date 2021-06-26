<template>
  <div class="atom-input">
    <input :type="type" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomInput",
  props: {
    type: { type: String, default: "text" },
  },
});
</script>

<style scoped></style>
