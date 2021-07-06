<template>
  <div class="mol-add-end">
    <h2>この内容で登録します。よろしいですか？</h2>
    <div>
      <label>【日付】</label>
      <p>{{ formatDate() }}</p>
    </div>
    <div>
      <label>【タイトル】</label>
      <p>{{ store.state.inputTitle }}</p>
    </div>
    <div>
      <label>【メモ】</label>
      <p>{{ store.state.inputMemo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "MolAddEnd",
  setup() {
    const store = useStore(key);

    const formatDate = (): Date => {
      const date: Date = store.state.inputDate;
      return date;
    };

    return {
      store,
      formatDate,
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
