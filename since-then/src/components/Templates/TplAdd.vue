<template>
  <div id="tpl-add">
    <a @click="first">first</a> |
    <a @click="second">second</a>
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
    const state = reactive<{ currentView: string }>({
      currentView: "OrgAddFirst",
    });
    //const messageTwo = ref<string>("こんにちは");

    const first = () => {
      state.currentView = "OrgAddFirst";
    };
    const second = () => {
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
