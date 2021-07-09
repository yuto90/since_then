<template>
  <div class="home">
    <OrgHome />
    // todo 詳細ページ
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrgHome from "@/components/Organisms/OrgHome.vue";

export default defineComponent({
  name: "Home",
  components: {
    OrgHome,
  },
});
</script>
