<template>
  <div>
    detail
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Detail extends Vue {
    created() {
      const value = {
        creater: 'admin',
        barcode: '6903244958103'
      };
      this.$store.dispatch(
        'getDetail',
        {
          url: '/goods/ordermx',
          method: 'POST',
          value: JSON.stringify(value)
        }).then(res => {
        console.log(res);
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>