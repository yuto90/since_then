<template>
  <div class="atom-textarea">
    <textarea
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      v-model="state.memo"
      @change="setMemo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "AtomInput",
  props: {
    placeholder: { type: String },
    cols: { type: String, default: "30" },
    rows: { type: String, default: "7" },
  },
  setup() {
    const store = useStore(key);
    const state = reactive<{ memo: string }>({
      memo: "",
    });

    const setMemo = () => {
      store.commit("setMemo", state.memo);
    };

    return {
      state,
      setMemo,
    };
  },
});
</script>

<style scoped></style>
