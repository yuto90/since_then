<template>
  <div class="mol-add-second">
    <h2>それは何の日？</h2>
    <AtomInput placeholder="例：次の資格試験日" />
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
