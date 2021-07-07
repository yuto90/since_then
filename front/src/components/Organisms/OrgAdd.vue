<template>
  <div id="org-add">
    <a @click="clickFirst" :style="state.firstStyle">Step1</a> ==>
    <a @click="clickSecond" :style="state.secondStyle">Step2</a> ==>
    <a @click="clickThird" :style="state.thirdStyle">Step3</a> ==>
    <a @click="end" :style="state.endStyle">End</a>
    <keep-alive>
      <component :is="state.currentView" />
    </keep-alive>
    <AtomButton :text="state.buttonText" @click="changeStep" style="padding-top:30px;" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
import axios from "axios";

import MolAddFirst from "@/components/Molecules/add/MolAddFirst.vue";
import MolAddSecond from "@/components/Molecules/add/MolAddSecond.vue";
import MolAddThird from "@/components/Molecules/add/MolAddThird.vue";
import MolAddEnd from "@/components/Molecules/add/MolAddEnd.vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "MolAdd",
  components: {
    MolAddFirst,
    MolAddSecond,
    MolAddThird,
    MolAddEnd,
    AtomButton,
  },
  setup() {
    const store = useStore(key); // $storeではなくuseStore()で取得する
    const router = useRouter(); // $routeではなくuseRouter()で取得する

    const state = reactive<{
      currentView: string;
      firstStyle: string;
      secondStyle: string;
      thirdStyle: string;
      endStyle: string;
      buttonText: string;
    }>({
      currentView: "MolAddFirst",
      firstStyle: "color: #42b983", // 緑
      secondStyle: "color: #2c3e50", // グレー
      thirdStyle: "color: #2c3e50",
      endStyle: "color: #2c3e50",
      buttonText: "次へ",
    });
    //const messageTwo = ref<string>("こんにちは");

    const clickFirst = () => {
      state.firstStyle = "color: #42b983";
      state.secondStyle = "color: #2c3e50";
      state.thirdStyle = "color: #2c3e50";
      state.endStyle = "color: #2c3e50";
      state.currentView = "MolAddFirst";
      state.buttonText = "次へ";
    };

    const clickSecond = () => {
      state.firstStyle = "color: #2c3e50";
      state.secondStyle = "color: #42b983";
      state.thirdStyle = "color: #2c3e50";
      state.endStyle = "color: #2c3e50";
      state.currentView = "MolAddSecond";
      state.buttonText = "次へ";
    };

    const clickThird = () => {
      state.firstStyle = "color: #2c3e50";
      state.secondStyle = "color: #2c3e50";
      state.thirdStyle = "color: #42b983";
      state.endStyle = "color: #2c3e50";
      state.currentView = "MolAddThird";
      state.buttonText = "次へ";
    };

    const end = () => {
      state.firstStyle = "color: #2c3e50";
      state.secondStyle = "color: #2c3e50";
      state.thirdStyle = "color: #2c3e50";
      state.endStyle = "color: #42b983";
      state.currentView = "MolAddEnd";
      state.buttonText = "登録";
    };

    const changeStep = async () => {
      if (state.currentView === "MolAddFirst") {
        state.firstStyle = "color: #2c3e50";
        state.secondStyle = "color: #42b983";
        state.currentView = "MolAddSecond";
      } else if (state.currentView === "MolAddSecond") {
        state.secondStyle = "color: #2c3e50";
        state.thirdStyle = "color: #42b983";
        state.currentView = "MolAddThird";
      } else if (state.currentView === "MolAddThird") {
        state.thirdStyle = "color: #2c3e50";
        state.endStyle = "color: #42b983";
        state.currentView = "MolAddEnd";
        state.buttonText = "登録";
      } else if (state.currentView === "MolAddEnd") {
        // 入力値をstoreから取得
        const inputDate: Date = store.state.inputDate;
        const inputTitle: string = store.state.inputTitle;
        const inputMemo: string = store.state.inputMemo;

        // DRFと接続して登録処理
        await axios
          .post("http://127.0.0.1:8000/api/post_date/", {
            date: inputDate,
            title: inputTitle,
            memo: inputMemo,
          })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));

        // 入力内容をリセット
        await store.dispatch("resetInputValue");

        // Homeにリダイレクト
        router.push("/");
      }
    };

    return {
      state,
      clickFirst,
      clickSecond,
      clickThird,
      end,
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
