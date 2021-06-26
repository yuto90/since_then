<template>
  <div class="atom-button">
    <button class="material-button contained-button">
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "AtomButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "ボタン",
    },
  },
  setup() {
    const state = reactive<{ messageOne: string }>({
      messageOne: "Hello",
    });
    const messageTwo = ref<string>("こんにちは");

    const displayAlert = () => {
      alert("ddddddddddd");
    };

    return {
      state,
      messageTwo,
      displayAlert,
    };
  },
});
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  /* 要素に標準スタイルを適用させない */
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.material-button {
  font-family: sans-serif;
  font-size: 0.875rem;
  font-weight: bold;
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  margin: 4px;
  border-radius: 4px;
}

.material-button.contained-button {
  color: #fff;
  background-color: #42b983;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
</style>
