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
    getDrfPostDate(): string[] {
      return store.state.drfPostDate;
    },
    getInputDate(): Date {
      return store.state.inputDate;
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
