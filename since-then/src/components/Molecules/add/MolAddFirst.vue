<template>
  <div class="mol-add-first">
    <h2>日付を入力してね</h2>
    <AtomInputDate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomInputDate from "@/components/Atoms/AtomInputDate.vue";

export default defineComponent({
  name: "MolAddFirst",
  components: {
    AtomInputDate,
  },
});
</script>

<style scoped></style>
