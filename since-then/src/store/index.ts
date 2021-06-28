import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol(); // Stateのキーと型の一覧

export const store = createStore<State>({
  state: {
    count: 0,
  },
});
