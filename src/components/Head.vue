<template>
  <div class="header">
    <router-link :to="path" v-if="left==='1'">
      <a-icon type="left" class="left"/>
    </router-link>
    <div><strong>{{text}}</strong></div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Head extends Vue {
    @Prop(String) text!: string;
    @Prop(String) left?: string;
    @Prop(String) path?: string;
  }
</script>

<style lang="scss" scoped>
  .header {
    text-align: center;
    background: rgb(0, 192, 239);
    padding: 16px 8px 16px 8px;
    margin-bottom: 16px;
    color: white;
    font-size: 20px;
    position: relative;

    a {
      .left {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(16px, 100%);
        color: white;
      }
    }
  }
</style>