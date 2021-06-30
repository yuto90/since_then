<template>
  <div class="atom-textarea">
    <textarea
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      v-model="state.value"
      @change="inputChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AtomTextarea",
  props: {
    placeholder: { type: String },
    cols: { type: String, default: "30" },
    rows: { type: String, default: "7" },
  },
  setup(props, context) {
    const state = reactive<{ value: string }>({
      // v-modelによって入力される度に更新されていく
      value: "",
    });

    // 入力される度に値をMolAddThirdにEmitする
    const inputChange = () => {
      context.emit("emitTextarea", state.value);
    };

    return {
      state,
      inputChange,
    };
  },
});
</script>

<style scoped></style>
