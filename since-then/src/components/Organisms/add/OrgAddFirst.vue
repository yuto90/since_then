<template>
  <div class="add-first">
    <h2>日付を入力してね</h2>
    <AtomInput type="date" />
    <AtomButton class="button" text="次へ" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";

export default defineComponent({
  name: "OrgAddFirst",
  components: {
    AtomButton,
    AtomInput,
  },
});
</script>

<style scoped></style>
