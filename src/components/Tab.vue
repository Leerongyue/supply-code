<template>
  <div class="tab">
    <a-icon :type="type"/>
    <span>{{name}}</span>
    <a-icon type="right"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tab extends Vue {
    @Prop(String) type!: string;
    @Prop(String) name!: string;
  }
</script>

<style lang="scss" scoped>
  .tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    margin-bottom: 16px;
    background: white;

    span {
      margin-right: auto;
      margin-left: 16px;
    }
  }
</style>