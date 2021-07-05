import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  date: string;
  title: string;
  memo: string;
  inputAdd: {
    inputDate: string;
    inputTitle: string;
    inputMemo: string;
  }[];
  drfPostDate:string[],
}

export const key: InjectionKey<Store<State>> = Symbol(); // Stateのキーと型の一覧

export const store = createStore<State>({
  state: {
    date: "",
    title: "",
    memo: "",
    inputAdd:[],
    drfPostDate: [],
  },
  mutations: {
    setInputAdd(state, payload: string[]) {
      state.inputAdd.push({
        inputDate: payload[0],
        inputTitle: payload[1],
        inputMemo: payload[2],
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
    setDrfResponcePostDate(state, payload) {
      state.drfPostDate = payload;
    },
  },
  getters: {
    getDrfPostDate():string[] {
      return store.state.drfPostDate;
    }
  }
});
