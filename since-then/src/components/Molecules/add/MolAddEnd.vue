<template>
  <div class="mol-add-end">
    <h2>この内容で登録します。よろしいですか？</h2>
    <div>
      <label>【日付】</label>
      <p>{{ formatDate() }}</p>
    </div>
    <div>
      <label>【タイトル】</label>
      <p>{{ store.state.title }}</p>
    </div>
    <div>
      <label>【メモ】</label>
      <p>{{ store.state.memo }}</p>
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

    const formatDate = (): string => {
      const hyphenDate: string = store.state.date;
      const replaceDate = hyphenDate.replace(/-/g, "/");
      //const date = Date.parse(stringDate);

      return replaceDate;
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
