<template>
  <el-menu default-active="link-layer" class="side-bar" :router="true">
    <el-menu-item index="link-layer"><i class="el-icon-menu"></i>链路层</el-menu-item>
    <el-menu-item index="protocol-layer"><i class="el-icon-menu"></i>协议层</el-menu-item>
  </el-menu>
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
  .main {
    margin-top: 60px;
  }
  .side-bar {
    position: fixed;
    top: 60px;
    bottom: 0px;
    width: 200px;
    padding-bottom: 20px;
    height: 100%;
    overflow: auto;
  }
</style>
