<template>
  <div class="setting"></div>
  <AtomButton />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    AtomButton,
  },
});
</script>
