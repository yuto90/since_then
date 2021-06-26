<template>
  <div id="tpl-add">
    <OrgAdd />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgAdd from "@/components/Organisms/OrgAdd.vue";

export default defineComponent({
  name: "TplAdd",
  components: {
    OrgAdd,
  },
});
</script>

<style lang="scss" scoped></style>
