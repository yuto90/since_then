<template>
  <div class="mol-add-end">
    <h2>この内容で登録します。よろしいですか？</h2>

    <table>
      <!-- テーブルセル幅設定 -->
      <colgroup>
        <col style="width: 33%" />
        <col style="width: 33%" />
      </colgroup>

      <tbody>
        <tr>
          <td>【日付】</td>
          <td align="left">{{ formatDateToString() }}</td>
        </tr>

        <tr>
          <td>【タイトル】</td>
          <td v-if="store.state.inputTitle !== ''" align="left">
            {{ store.state.inputTitle }}
          </td>
          <td v-else class="validate" align="left">
            ※この項目は必須です。
          </td>
        </tr>

        <tr>
          <td>【メモ】</td>
          <td align="left">
            {{ store.state.inputMemo }}
          </td>
        </tr>

      </tbody>
    </table>

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

.validate {
  color: red;
}

table {
  table-layout: fixed;
  width: 30%; /* テーブルのセル幅固定 */
  margin-left: auto;
  margin-right: auto;
  //border: 3px solid #42b983;
}

table td {
  /*table内のtdに対して*/
  word-wrap: break-word; // 改行させる設定
  padding: 10px 0px;
}
</style>
