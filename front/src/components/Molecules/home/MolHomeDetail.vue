<template>
  <div id="mol-home-detail">
    {{ state.postDetail }}

    <AtomInputDate  :defaultDate="convertToStringDate()"/>
    <AtomInput />
    <AtomTextarea />

    <div class="content">
      <div class="inner">
        <AtomButton :text="'戻る'" @click="transitionTable" />
        <AtomButton
          :text="'更新'"
          @click="transitionTable"
          btnColor="#00CCFF"
        />
        <AtomButton
          :text="'削除'"
          @click="transitionTable"
          btnColor="#FF4F50"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

import AtomButton from "@/components/Atoms/AtomButton.vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";
import AtomInputDate from "@/components/Atoms/AtomInputDate.vue";
import AtomTextarea from "@/components/Atoms/AtomTextarea.vue";

// propsのアノテーション
type Props = {
  detailId: number;
};

export default defineComponent({
  name: "MolHomeDetail",
  components: {
    AtomButton,
    AtomInput,
    AtomInputDate,
    AtomTextarea,
  },
  props: {
    detailId: {
      type: Number,
      required: true,
    },
  },
  setup(props: Props, context) {
    // storeに接続
    const store = useStore(key);

    const state = reactive({
      postDetail: store.getters.getDrfPostDate[props.detailId - 1],
    });

    const transitionTable = () => {
      context.emit("emitTable");
    };

    // todo
    // Date型の日付をyyyy-mm-ddに変換する
    const convertToStringDate = ():string => {
      const date:Date = state.postDetail["date"];
      alert(typeof(date));

      const y = date.getFullYear();
      const m = ('00' + (date.getMonth()+1)).slice(-2);
      const d = ('00' + date.getDate()).slice(-2);


      //return (y + '-' + m + '-' + d);
      return '2021-10-11';

    };

    return {
      store,
      state,
      transitionTable,
      convertToStringDate,
    };
  },
});
</script>

<style lang="scss" scoped>
#mol-home-detail {
  text-align: center;
}
.content {
  width: 400px;
  height: 100px;
}

.inner {
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
}
</style>
