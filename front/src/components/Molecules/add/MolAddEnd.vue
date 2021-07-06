<template>
  <div class="mol-add-end">
    <h2>この内容で登録します。よろしいですか？</h2>
    <div>
      <label>【日付】</label>
      <p>{{ formatDateToString() }}</p>
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

    // todo 日付フォーマット関数をhelper関数化する
    const formatDateToString = (): string => {
      // todo stateを直接参照せずにgettersを使う
      const date: Date = store.state.inputDate;

      const yearStr = `${date.getFullYear()}`;
      const monthStr = `${1 + date.getMonth()}`;
      const dayStr = `${date.getDate()}`;

      // storeに格納されているDrfPostDateを取得
      //const date: Date = computed(() => store.getters.getInputDate);

      return yearStr + "年" + monthStr + "月" + dayStr + "日";
    };

    return {
      store,
      formatDateToString,
    };
  },
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>
