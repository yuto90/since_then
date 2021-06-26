<template>
  <div class="mol-add-first">
    <h2>日付を入力してね</h2>
    <AtomInput type="date" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";

export default defineComponent({
  name: "MolAddFirst",
  components: {
    AtomInput,
  },
});
</script>

<style scoped></style>
