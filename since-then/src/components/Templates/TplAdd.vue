<template>
  <div id="tpl-add">
    <a @click="first" :style="state.firstStyle">first</a> |
    <a @click="second" :style="state.secondStyle">second</a>
    <component :is="state.currentView"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import OrgAddFirst from "@/components/Organisms/add/OrgAddFirst.vue";
import OrgAddSecond from "@/components/Organisms/add/OrgAddSecond.vue";

export default defineComponent({
  name: "TplAdd",
  components: {
    OrgAddFirst,
    OrgAddSecond,
  },
  setup() {
    const state = reactive<{ currentView: string, firstStyle: string, secondStyle: string}>({
      currentView: "OrgAddFirst",
      firstStyle: "color: #42b983",
      secondStyle: "color: #2c3e50",
    });
    //const messageTwo = ref<string>("こんにちは");

    const first = () => {
      state.secondStyle = "color: #2c3e50";
      state.firstStyle = "color: #42b983";
      state.currentView = "OrgAddFirst";
    };
    const second = () => {
      state.secondStyle = "color: #42b983";
      state.firstStyle = "color: #2c3e50";
      state.currentView = "OrgAddSecond";
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
#tpl-add {
  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
