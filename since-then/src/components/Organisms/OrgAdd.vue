<template>
  <div id="org-add">
    <a @click="first" :style="state.firstStyle">first</a> |
    <a @click="second" :style="state.secondStyle">second</a>
    <keep-alive>
      <component :is="state.currentView"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import MolAddFirst from "@/components/Molecules/add/MolAddFirst.vue";
import MolAddSecond from "@/components/Molecules/add/MolAddSecond.vue";

export default defineComponent({
  name: "MolAdd",
  components: {
    MolAddFirst,
    MolAddSecond,
  },
  setup() {
    const state = reactive<{
      currentView: string;
      firstStyle: string;
      secondStyle: string;
    }>({
      currentView: "MolAddFirst",
      firstStyle: "color: #42b983",
      secondStyle: "color: #2c3e50",
    });
    //const messageTwo = ref<string>("こんにちは");

    const first = () => {
      state.secondStyle = "color: #2c3e50";
      state.firstStyle = "color: #42b983";
      state.currentView = "MolAddFirst";
    };
    const second = () => {
      state.secondStyle = "color: #42b983";
      state.firstStyle = "color: #2c3e50";
      state.currentView = "MolAddSecond";
    };

    return {
      state,
      first,
      second,
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
