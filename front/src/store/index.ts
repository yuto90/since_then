import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  inputDate: Date;
  inputTitle: string;
  inputMemo: string;
  drfPostDate: string[];
}

export const key: InjectionKey<Store<State>> = Symbol(); // Stateのキーと型の一覧

export const store = createStore<State>({
  state: {
    inputDate: new Date(),
    inputTitle: "",
    inputMemo: "",
    drfPostDate: [],
  },
  mutations: {
    setDate(state, payload) {
      state.inputDate = payload;
    },
    setTitle(state, payload) {
      state.inputTitle = payload;
    },
    setMemo(state, payload) {
      state.inputMemo = payload;
    },
    setDrfResponcePostDate(state, payload) {
      state.drfPostDate = payload;
    },
  },
  getters: {
    getDrfPostDate(state): string[] {
      return state.drfPostDate;
    },
    getInputDate(state): Date {
      return state.inputDate;
    },
    getInputTitle(state): string {
      return state.inputTitle;
    },
    getInputMemo(state): string {
      return state.inputMemo;
    },
  },
  actions: {
    // 入力内容リセット用
    resetInputValue(context) {
      context.commit("setDate", new Date());
      context.commit("setTitle", "");
      context.commit("setMemo", "");
    },
  },
});
