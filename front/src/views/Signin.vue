<template>
  <div class="signin">
    <MolSignin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MolSignin from "@/components/Molecules/MolSignin.vue";

export default defineComponent({
  name: "Signin",
  components: {
    MolSignin,
  },
});
</script>
