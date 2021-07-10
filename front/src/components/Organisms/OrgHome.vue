<template>
  <div id="org-home">
    <div v-if="state.currentView === 'MolHomeTable'">
      <MolHomeTable @emitDetail="transitionDetail" />
    </div>
    <div v-if="state.currentView === 'MolHomeDetail'">
      <MolHomeDetail @emitTable="transitionTable" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import MolHomeTable from "@/components/Molecules/home/MolHomeTable.vue";
import MolHomeDetail from "@/components/Molecules/home/MolHomeDetail.vue";

export default defineComponent({
  name: "OrgHome",
  components: {
    MolHomeTable,
    MolHomeDetail,
  },
  props: {},
  setup() {
    const state = reactive({
      currentView: "MolHomeTable", // Home画面のデフォルト表示コンポーネント
      detailId: '',
    });

    const transitionTable = (): void => {
      state.currentView = 'MolHomeTable';
    };

    // 子コンポーネントからの引数は指定した親コンポーネントの関数の引数に伝達される
    const transitionDetail = (detailId:string): void => {
      state.detailId = detailId;
      state.currentView = 'MolHomeDetail';
    };
    return {
      state,
      transitionTable,
      transitionDetail,
    };
  },
});
</script>
