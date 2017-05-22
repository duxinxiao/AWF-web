<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="title">Active Website Fingerprinting on Tor</div>
    </header>
  </div>
</template>

<script lang="babel">

  export default {
    data() {
      return {};
    },
    computed: {
    },
    methods: {
    },
    filters: {
    },
  };
</script>

<style lang="scss" scoped>
  .header-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
  }
  .header {
    height: 60px;
    background-color: #20a0ff;
    color: #fff;
    width: 100%;
    line-height: 60px;
  }
  .title {
    font-size: 18px;
    margin-left: 2rem;
  }
</style>
