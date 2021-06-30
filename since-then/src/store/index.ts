import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  date: string;
  title: string;
  memo: string;
}

export const key: InjectionKey<Store<State>> = Symbol(); // Stateのキーと型の一覧

export const store = createStore<State>({
  state: {
    date: '',
    title: "",
    memo: "",
  },
  mutations: {
    setDate(state, payload) {
      state.date = payload;
    },
    setTitle(state, payload) {
      state.title = payload;
    },
    setMemo(state, payload) {
      state.memo = payload;
    }
  }
});
