<template>
  <div id="org-signin">
    <div class="Form">
      <div class="Form-Word">
        <h2>Since-Thenに登録する</h2>
      </div>

      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>ユーザー名
        </p>
        <input type="text" class="Form-Item-Input" placeholder="例）山田太郎" />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>メールアドレス
        </p>
        <input
          type="email"
          class="Form-Item-Input"
          placeholder="例）example@gmail.com"
        />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">
          <span class="Form-Item-Label-Required">必須</span>パスワード
        </p>
        <input
          type="email"
          class="Form-Item-Input"
          placeholder="例）example@gmail.com"
        />
      </div>
      <div class="form-register-button">
        <AtomButton :text="'新規登録'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AtomButton from "@/components/Atoms/AtomButton.vue";

export default defineComponent({
  name: "OrgSignin",
  components: {
    AtomButton,
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
  .Form-Item {
    border-top: 1px solid #ddd;
    padding-top: 24px;
    padding-bottom: 24px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    .Form-Item {
      padding-left: 14px;
      padding-right: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
      flex-wrap: wrap;
    }
  }
  .Form-Item:nth-child(5) {
    border-bottom: 1px solid #ddd;
  }
  .Form-Item-Label {
    width: 100%;
    max-width: 248px;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Label {
      max-width: inherit;
      display: flex;
      align-items: center;
      font-size: 15px;
    }
  }
  .Form-Item-Label.isMsg {
    margin-top: 8px;
    margin-bottom: auto;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Label.isMsg {
      margin-top: 0;
    }
  }
  .Form-Item-Label-Required {
    border-radius: 6px;
    margin-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 48px;
    display: inline-block;
    text-align: center;
    background: #42b983;
    color: #fff;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Label-Required {
      border-radius: 4px;
      padding-top: 4px;
      padding-bottom: 4px;
      width: 32px;
      font-size: 10px;
    }
  }
  .Form-Item-Input {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 48px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Input {
      margin-left: 0;
      margin-top: 16px;
      height: 40px;
      flex: inherit;
      font-size: 15px;
    }
  }
  .Form-Item-Textarea {
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-left: 40px;
    padding-left: 1em;
    padding-right: 1em;
    height: 216px;
    flex: 1;
    width: 100%;
    max-width: 410px;
    background: #eaedf2;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    .Form-Item-Textarea {
      margin-top: 16px;
      margin-left: 0;
      height: 200px;
      flex: inherit;
      font-size: 15px;
    }
  }
  .form-register-button {
    text-align: center;
  }
}
</style>
