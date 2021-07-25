<template>
  <div class="login">
    <MolLogin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MolLogin from "@/components/Molecules/MolLogin.vue";

export default defineComponent({
  name: "Login",
  components: {
    MolLogin,
  },
});
</script>
