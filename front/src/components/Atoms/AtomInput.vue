<template>
  <div class="atom-input">
    <input
      :placeholder="placeholder"
      :size='size'
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
    size: { type: String, default: "30" },
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
