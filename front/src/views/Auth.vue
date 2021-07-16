<template>
  <div id="home">
    <OrgAuth />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgAuth from "@/components/Organisms/OrgAuth.vue";

export default defineComponent({
  name: "Auth",
  components: {
    OrgAuth,
  },
});
</script>
