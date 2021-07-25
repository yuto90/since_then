<template>
  <header class="header-3">
    <div class="header-inner">
      <div class="logo">
        <h1>
          <router-link
            :to="{ name: 'Home' }"
            style="color: #42b983; text-decoration: none"
          >
            Since-Then
          </router-link>
          <span class="subtitle">「あれから」を記録するアプリ</span>
        </h1>
      </div>
      <nav class="header-nav">
        <div class="header-nav-item">
          <router-link :to="{ name: 'Signin' }">
            <AtomButton :text="'新規登録'" @click="transitionTable" />
          </router-link>
        </div>
        <div class="header-nav-item">
          <router-link :to="{ name: 'Login' }">
            <AtomButton
              :text="'ログイン'"
              @click="transitionTable"
              btnColor="white"
              btnTextColor="#2c3e50"
            />
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "MolHeader",
  components: {
    AtomButton,
  },
  //setup(props, context) {},
});
</script>

<style scoped>
.header-3 {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  height: 60px;
  padding: 0 0.8em;
  margin: 0 auto;
  font-size: 1.2em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

.header-nav {
  display: flex;
  align-items: center;
}

.header-nav-item {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.logo img {
  width: 70px;
}

.header-login {
  color: #2c3e50;
}

@media screen and (max-width: 480px) {
}

h1 .subtitle {
  font-size: 0.4em;
  font-weight: normal;
}
</style>
