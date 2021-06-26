<template>
  <div class="add">
    <TplAdd />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TplAdd from "@/components/Templates/TplAdd.vue";

export default defineComponent({
  name: "Add",
  components: {
    TplAdd,
  },
});
</script>
