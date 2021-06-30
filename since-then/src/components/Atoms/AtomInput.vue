<template>
  <div class="atom-input">
    <input :placeholder="placeholder" v-model="state.title" @change="setTitle"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "AtomInput",
  props: {
    placeholder: { type: String, default: "hint" },
  },

  setup() {
    const store = useStore(key);
    const state = reactive<{ title: string }>({
      title: "",
    });

    const setTitle = () => {
      store.commit('setTitle', state.title)
    };

    return {
      state,
      setTitle,
    };
  },
});
</script>

<style scoped></style>
