<template>
  <div id="mol-home-detail">
    {{ state.postDetail }}
    <AtomButton :text='"戻る"' @click="transitionTable" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import AtomButton from "@/components/Atoms/AtomButton.vue";

// propsのアノテーション
type Props = {
  detailId: number;
};

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
  setup(props:Props, context) {
    // storeに接続
    const store = useStore(key);

    const state = reactive({
      postDetail: store.getters.getDrfPostDate[props.detailId - 1],
    })

    const transitionTable = () => {
      context.emit("emitTable");
    };

    return {
      store,
      state,
      transitionTable,
    };
  },
});
</script>

<style lang="scss" scoped></style>
