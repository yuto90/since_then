<template>
  <div id="org-home">
    <div v-if="state.currentView === 'MolHomeTable'">
      <MolHomeTable @emitDetail="transitionDisplay('MolHomeDetail')" />
    </div>
    <div v-if="state.currentView === 'MolHomeDetail'">
      <MolHomeDetail @emitTable="transitionDisplay('MolHomeTable')" />
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
    });

    // コンポーネント切り替え用関数
    const transitionDisplay = (currentComponents: string): void => {
      state.currentView = currentComponents;
    };

    return {
      state,
      transitionDisplay,
    };
  },
});
</script>
