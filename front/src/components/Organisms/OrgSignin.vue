<template>
  <div id="org-signin">
    <div class="Form">
      <div class="Form-Word">
        <h2>Since-Thenに登録する</h2>
      </div>

      <MolNameForm />

      <MolEmailForm />

      <MolPassForm />

      <div class="form-register-button">
        <AtomButton :text="'新規登録'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AtomButton from "@/components/Atoms/AtomButton.vue";

import MolNameForm from "@/components/Molecules/MolNameForm.vue";
import MolEmailForm from "@/components/Molecules/MolEmailForm.vue";
import MolPassForm from "@/components/Molecules/MolPassForm.vue";

export default defineComponent({
  name: "OrgSignin",
  components: {
    AtomButton,
    MolNameForm,
    MolEmailForm,
    MolPassForm,
  },
});
</script>

<style lang="scss" scoped>
#org-signin {
  .Form {
    margin-left: auto;
    margin-right: auto;
    max-width: 720px;
  }
  @media screen and (max-width: 480px) {
    .Form {
      margin-top: 40px;
    }
  }
  .Form-Word {
    text-align: center;
  }
  .form-register-button {
    text-align: center;
  }
}
</style>
