<template>
  <div id="org-add">
    <a @click="first" :style="state.firstStyle">First</a> |
    <a @click="second" :style="state.secondStyle">Second</a> |
    <a @click="third" :style="state.thirdStyle">Third</a>
    <keep-alive>
      <component :is="state.currentView" />
    </keep-alive>
    <AtomButton class="button" text="次へ" @click="changeStep" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MolAddFirst from "@/components/Molecules/add/MolAddFirst.vue";
import MolAddSecond from "@/components/Molecules/add/MolAddSecond.vue";
import MolAddThird from "@/components/Molecules/add/MolAddThird.vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "MolAdd",
  components: {
    MolAddFirst,
    MolAddSecond,
    MolAddThird,
    AtomButton,
  },
  setup() {
    const state = reactive<{
      currentView: string;
      firstStyle: string;
      secondStyle: string;
      thirdStyle: string;
    }>({
      currentView: "MolAddFirst",
      firstStyle: "color: #42b983", // 緑
      secondStyle: "color: #2c3e50", // グレー
      thirdStyle: "color: #2c3e50",
    });
    //const messageTwo = ref<string>("こんにちは");

    const first = () => {
    state.firstStyle = "color: #42b983";
    state.secondStyle = "color: #2c3e50";
    state.thirdStyle = "color: #2c3e50";
    state.currentView = "MolAddFirst";
    };

    const second = () => {
    state.firstStyle = "color: #2c3e50";
    state.secondStyle = "color: #42b983";
    state.thirdStyle = "color: #2c3e50";
    state.currentView = "MolAddSecond";
    };

    const third = () => {
    state.firstStyle = "color: #2c3e50";
    state.secondStyle = "color: #2c3e50";
    state.thirdStyle = "color: #42b983";
    state.currentView = "MolAddThird";
    };

    const changeStep = () => {
      if (state.currentView === "MolAddFirst") {
        state.firstStyle = "color: #2c3e50";
        state.secondStyle = "color: #42b983";
        state.currentView = "MolAddSecond";
      } else if (state.currentView === "MolAddSecond") {
        state.secondStyle = "color: #2c3e50"; 
        state.thirdStyle = "color: #42b983";
        state.currentView = "MolAddThird";
      } else if (state.currentView === "MolAddThird") {
        state.thirdStyle = "color: #2c3e50"; // 緑
      }
    };

    return {
      state,
      first,
      second,
      third,
      changeStep,
    };
  },
});
</script>

<style lang="scss" scoped>
#org-add {
  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
  }
}
</style>
