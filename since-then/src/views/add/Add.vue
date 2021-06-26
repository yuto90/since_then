<template>
  <div class="add">
    <router-link :to="{ name: 'first' }">First</router-link> |
    <router-link :to="{ name: 'second' }">Second</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Add",
});
</script>

<style lang="scss" scoped>
.router-link-exact-active{
  color: green;
}
.button {
  margin-top: 30px;
}

.add {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
