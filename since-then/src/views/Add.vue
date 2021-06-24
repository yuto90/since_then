<template>
  <div class="add"></div>
  <AtomButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "Add",
  components: {
    AtomButton,
  },
});
</script>
