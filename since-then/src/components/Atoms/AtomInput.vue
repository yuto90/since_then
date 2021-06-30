<template>
  <div class="atom-input">
    <input :placeholder="placeholder" v-model="state.value" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AtomInput",
  props: {
    placeholder: { type: String, default: "hint" },
  },

  setup() {
    const state = reactive<{ value: string }>({
      value: "",
    });

    return {
      state,
    };
  },
});
</script>

<style scoped></style>
