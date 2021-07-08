<template>
  <div id="org-home">
    <table style="table-layout: fixed; width: 80%">
      <!-- テーブルセル幅設定 -->
      <colgroup>
        <col style="width: 33%" />
        <col style="width: 33%" />
        <col style="width: 33%" />
      </colgroup>

      <thead>
        <tr>
          <th>タイトル</th>
          <th>日付</th>
          <th>メモ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="elem in postDate" v-bind:key="elem.id">
          <td>{{ elem["title"] }}</td>
          <td>{{ elem["date"] }}</td>
          <td>{{ elem["memo"] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "Home",
  setup() {
    let state = reactive({
      data: [],
    });

    const store = useStore(key); // $storeではなくuseStore()で取得する

    // storeに格納されているDrfPostDateを取得
    const postDate = computed(() => store.getters.getDrfPostDate);

    async function getApiResponce() {
      await axios
        .get("http://127.0.0.1:8000/api/post_date") // GET post_date一覧取得
        .then((response) =>
          store.commit("setDrfResponcePostDate", response.data)
        )
        .catch((error) => console.log(error));
    }

    onMounted(() => {
      getApiResponce();
    });

    return {
      state,
      store,
      postDate,
    };
  },
});
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
  width: 30%; /* テーブルのセル幅固定 */
  margin-left: auto;
  margin-right: auto;
  //border: 3px solid #42b983;
}

table td {
  word-wrap: break-word; // 改行させる設定
  padding: 50px 0px;
}
</style>
