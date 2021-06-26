<template>
  <div class="add">
    <AtomInput />
    <AtomButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";
import AtomInput from "@/components/Atoms/AtomInput.vue";

export default defineComponent({
  name: "Add",
  components: {
    AtomButton,
    AtomInput,
  },
});
</script>
