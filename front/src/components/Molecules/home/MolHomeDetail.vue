<template>
  <div id="mol-home-detail">
    detail
    {{ detailId }}
    <AtomButton :text="btnState.text" @click="transitionTable" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "MolHomeDetail",
  components: {
    AtomButton,
  },
  props: {
    detailId: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const btnState = reactive({
      text: "戻る",
    });

    const transitionTable = () => {
      context.emit("emitTable");
    };

    return {
      btnState,
      transitionTable,
    };
  },
});
</script>

<style lang="scss" scoped></style>
