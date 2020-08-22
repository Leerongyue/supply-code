<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot/>
    </div>
    <DownNav class="downNav"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import DownNav from '@/components/DownNav.vue';

  @Component({
    components: {DownNav}
  })
  export default class Layout extends Vue {

  }
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .content {
      flex-grow: 1;
    }
  }
</style>