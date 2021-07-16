<template>
  <div id="org-auth">
    <!--
    <div v-if="state.currentView === 'MolHomeTable'">
      <MolHomeTable @emitDetail="transitionDetail" />
    </div>
    <div v-if="state.currentView === 'MolHomeDetail'">
      <MolHomeDetail @emitTable="transitionTable" :index="state.index" />
    </div>
    -->
      <MolAuthLogin/>
      <MolAuthSignin/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import MolAuthLogin from "@/components/Molecules/auth/MolAuthLogin.vue";
import MolAuthSignin from "@/components/Molecules/auth/MolAuthSignin.vue";

export default defineComponent({
  name: "OrgAuth",
  components: {
    MolAuthLogin,
    MolAuthSignin
  },
  props: {},
  setup() {
    const state = reactive({
      currentView: "", // Home画面のデフォルト表示コンポーネント
      index: "",
    });

//    const transitionTable = (): void => {
//      state.currentView = "MolHomeTable";
//    };
//
//    // 子コンポーネントからの引数は指定した親コンポーネントの関数の引数に伝達される
//    const transitionDetail = (index: string): void => {
//      state.index = index;
//      state.currentView = "MolHomeDetail";
//    };
    return {
      state,
    };
  },
});
</script>
