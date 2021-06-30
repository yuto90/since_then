<template>
  <div class="atom-input-date">
    <input type="date" v-model="state.inputDate" @change="setDate"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "AtomInputDate",
  setup() {
    const store = useStore(key);

    const state = reactive<{ inputDate: string }>({
      inputDate: '',
    });

    const setDate = () => {
      store.commit('setDate', state.inputDate)
    };

    return {
      state,
      setDate,
    };
  },
});
</script>

<style scoped></style>
