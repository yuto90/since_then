import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  date: string;
  title: string;
  memo: string;
  display: {
    displayDate: string;
    displayTitle: string;
    displayMemo: string;
  }[];
}

export const key: InjectionKey<Store<State>> = Symbol(); // Stateのキーと型の一覧

export const store = createStore<State>({
  state: {
    date: "",
    title: "",
    memo: "",
    display: [],
  },
  mutations: {
    setDisplay(state, payload: string[]) {
      state.display.push({
        displayDate: payload[0],
        displayTitle: payload[1],
        displayMemo: payload[2],
      });
      state.date = "";
      state.title = "";
      state.memo = "";
    },
    setDate(state, payload) {
      state.date = payload;
    },
    setTitle(state, payload) {
      state.title = payload;
    },
    setMemo(state, payload) {
      state.memo = payload;
    },
  },
});
