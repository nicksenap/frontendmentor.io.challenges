import { createStore } from 'vuex';

export default createStore({
  state: {
    isDarkTheme: false,
    foobar: 'barfoo'
  },
  mutations: {
    toggleDarkTheme(state): void {
      state.isDarkTheme = !state.isDarkTheme;
    }
  },
  actions: {
    toggleDarkTheme(): void {
      this.commit('toggleDarkTheme');
    }
  },
  modules: {}
});
