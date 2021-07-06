<template>
  <div class="atom-input-date">
    <input type="date" v-model="state.value" @change="inputDate" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "AtomInputDate",
  setup(props, context) {
    const state = reactive<{ value: string }>({
      value: "",
    });

    const inputDate = (): void => {
      context.emit("emitInputDate", new Date(state.value));
    };

    return {
      state,
      inputDate,
    };
  },
});
</script>

<style scoped></style>
