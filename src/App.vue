<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <side-bar></side-bar>
    <div class="main-content">
      <main-container></main-container>
    </div>
    </el-row>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar';
import MainContainer from '@/components/Main';
import SideBar from '@/components/SideBar';

export default {
  name: 'app',
  components: {
    NavigationBar,
    MainContainer,
    SideBar,
  },
};
</script>

<style lang="scss">
  body {
    background: #f8f8f8;
    height: 100%;
    color: #666;
    font-family: Helvetica Neue, Helvetica, Roboto, sans-serif, Arial;
    font-size: 16px;
    margin: 0px;
    padding: 0px;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  .main-content {
    margin-left: 200px;
  }
</style>
