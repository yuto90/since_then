<template>
  <header class="header-3">
    <div class="header-inner">
      <div class="logo">
        <h1>Since-Then</h1>
      </div>
      <nav class="header-nav">
        <div class="header-nav-item">
          <a class="header-button header-post">新規投稿</a>
        </div>
        <div class="header-nav-item">
          <a class="header-button header-login">ログイン</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MolHeader",
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
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

.header-button {
  box-sizing: border-box;
  display: inline-block;
  padding: 0.5em 1.2em;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}

.header-login {
  color: #999;
}

.header-post {
  font-weight: bold;
  color: #fff;
  background: #00b5ad;
  border: 1px #00b5ad solid;
  border-radius: 3px;
}

@media screen and (max-width: 480px) {
  .header-post {
    display: none;
  }
}
</style>
