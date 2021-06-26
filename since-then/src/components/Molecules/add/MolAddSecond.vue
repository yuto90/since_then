<template>
  <div class="mol-add-second">
    <h2>何があった日？</h2>
    <AtomInput type="textarea" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";

export default defineComponent({
  name: "MolAddSecond",
  components: {
    AtomInput,
  },
});
</script>

<style scoped></style>
