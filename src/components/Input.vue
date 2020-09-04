<template>
  <div class="inputItem">
    <span>{{name}}</span>
    <input
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="$emit('input',$event.target.value)"
    >
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Input extends Vue {
    @Prop(String) name!: string;
    @Prop(String) placeholder!: string;
    @Prop(String) value!: string;
    @Prop(String) type!: string;
  }
</script>
<style lang="scss" scoped>
</style>

<style lang="scss" scoped>
  $lineColor: #f5f5f5;
  .inputItem {
    margin: 8px 32px;
    padding: 10px 0;
    display: flex;
    background: white;
    border-radius: 24px;


    > span {
      margin-right: 24px;
      margin-left: 12px;
    }

    > input {
      flex-grow: 1;
      border: none;
    }
  }
</style>