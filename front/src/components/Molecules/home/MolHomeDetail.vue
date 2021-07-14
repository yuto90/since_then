<template>
  <div id="mol-home-detail">
    <table>
      <!-- テーブルセル幅設定 -->
      <colgroup>
        <col style="width: 33%" />
        <col style="width: 33%" />
      </colgroup>

      <tr>
        <th>日付</th>
        <td class="column">
          <AtomInputDate :defaultDate="state.postDetail['date']" />
        </td>
      </tr>
      <tr>
        <th>タイトル</th>
        <td class="column">
          <AtomInput
            :placeholder="'タイトル名を入力してください'"
            :defaultTitle="state.postDetail['title']"
          />
        </td>
      </tr>
      <tr>
        <th>メモ</th>
        <td class="column">
          <AtomTextarea
            :placeholder="'メモ等あればを入力してください'"
            :defaultText="state.postDetail['memo']"
          />
        </td>
      </tr>
      <tr>
        <th>作成日時</th>
        <td class="column">
          {{ formatDateToString(state.postDetail["created_datetime"]) }}
        </td>
      </tr>
      <tr>
        <th>更新日時</th>
        <td class="column">
          {{ formatDateToString(state.postDetail["updated_datetime"]) }}
        </td>
      </tr>
    </table>

    <div class="btn">
      <AtomButton
        :text="'戻る'"
        @click="transitionTable"
        style="padding: 0px 3%"
      />
      <AtomButton
        :text="'更新'"
        @click="transitionTable"
        btnColor="#00CCFF"
        style="padding: 0px 3%"
      />
      <AtomButton
        :text="'削除'"
        @click="transitionTable"
        btnColor="#FF4F50"
        style="padding: 0px 3%"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import AtomButton from "@/components/Atoms/AtomButton.vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";
import AtomInputDate from "@/components/Atoms/AtomInputDate.vue";
import AtomTextarea from "@/components/Atoms/AtomTextarea.vue";

// propsのアノテーション
type Props = {
  detailId: number;
};

export default defineComponent({
  name: "MolHomeDetail",
  components: {
    AtomButton,
    AtomInput,
    AtomInputDate,
    AtomTextarea,
  },
  props: {
    detailId: {
      type: Number,
      required: true,
    },
  },
  setup(props: Props, context) {
    // storeに接続
    const store = useStore(key);

    const state = reactive({
      postDetail: store.getters.getDrfPostDate[props.detailId - 1],
    });

    const transitionTable = () => {
      context.emit("emitTable");
    };

    // DateオブジェクトをYYYYMMDD hh:mmに変換
    const formatDateToString = (strDate: string): string => {
      // Dateオブジェクトをインスタンス化
      const date = new Date(strDate);

      const yearStr = date.getFullYear();
      //月だけ+1すること
      const monthStr = 1 + date.getMonth();
      const dayStr = date.getDate();
      const hourStr = date.getHours();
      const minuteStr = date.getMinutes();

      let formatDate = "YYYY-MM-DD hh:mm";
      formatDate = formatDate.replace(/YYYY/g, `${yearStr}`);
      formatDate = formatDate.replace(/MM/g, `${monthStr}`);
      formatDate = formatDate.replace(/DD/g, `${dayStr}`);
      formatDate = formatDate.replace(/hh/g, `${hourStr}`);
      formatDate = formatDate.replace(/mm/g, `${minuteStr}`);

      return formatDate;
    };

    return {
      store,
      state,
      transitionTable,
      formatDateToString,
    };
  },
});
</script>

<style lang="scss" scoped>
#mol-home-detail {
  text-align: center;
}

.btn {
  display: flex;
  justify-content: center;
  padding-top: 5%;
}

table {
  table-layout: fixed;
  width: 40%; /* テーブルのセル幅固定 */
  margin-left: auto;
  margin-right: auto;
  //border: 3px solid #42b983;
}
tr {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.column {
  word-wrap: break-word; // 改行させる設定
  padding: 40px 0px;
}
</style>
