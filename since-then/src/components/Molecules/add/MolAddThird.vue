<template>
  <div class="mol-add-third">
    <h2>メモとかあれば書いてみてね ※任意</h2>
    <AtomTextarea placeholder="例：絶対に合格する!!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomTextarea from "@/components/Atoms/AtomTextarea.vue";

export default defineComponent({
  name: "MolAddThird",
  components: {
    AtomTextarea,
  },
});
</script>

<style scoped></style>
