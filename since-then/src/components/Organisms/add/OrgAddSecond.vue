<template>
  <div class="add-second">
    <h2>何があった日？</h2>
    <AtomInput type="textarea" />
    <AtomButton class="button" text="次へ" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";

export default defineComponent({
  name: "OrgAddSecond",
  components: {
    AtomButton,
    AtomInput,
  },
});
</script>

<style scoped></style>
