<template>
  <div class="atom-input">
    <input
      :placeholder="placeholder"
      v-model="state.value"
      @change="inputChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AtomInput",
  props: {
    placeholder: { type: String, default: "hint" },
  },

  setup(props, context) {
    const state = reactive<{ value: string }>({
      value: "",
    });

    const inputChange = () => {
      context.emit("emitInput", state.value);
    };

    return {
      state,
      inputChange,
    };
  },
});
</script>

<style scoped></style>
