<template>
  <div class="btn">
    <button>{{name}}</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {
    @Prop(String) name!: string;
  }
</script>

<style lang="scss" scoped>
  .btn {
    margin: 0 16px;

    > button {
      background: rgb(254, 137, 67);
      width: 85vw;
      margin-top: 24px;
      padding: 10px 0;
      border-radius: 24px;
      color: white
    }
  }
</style>