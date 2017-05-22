<template>
  <div class="container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="监控列表">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="babel">
  // import axios from 'axios';

  export default {
    data() {
      return {
        tableData: [
          { address: 'www.google.com' },
          { address: 'www.youtube.com' },
          { address: 'www.facebook.com' },
          { address: 'www.baidu.com' },
          { address: 'www.wikipedia.org' },
          { address: 'www.yahoo.com' },
          { address: 'www.qq.com' },
          { address: 'www.reddit.com' },
          { address: 'www.taobao.com' },
          { address: 'www.twitter.com' },
          { address: 'www.zmazon.com' },
          { address: 'www.sohu.com' },
          { address: 'www.tmall.com' },
          { address: 'www.live.com' },
          { address: 'www.vk.com' },
          { address: 'www.instagram.com' },
          { address: 'www.sina.com.cn' },
          { address: 'www.weibo.com' },
          { address: 'www.jd.com' },
          { address: 'www.360.cn' },
          { address: 'www.linkedin.com' },
          { address: 'www.yandex.ru' },
          { address: 'www.netflix.com' },
          { address: 'www.ntd.tv    ' },
          { address: 'www.imgur.com' },
          { address: 'www.ebay.com' },
          { address: 'www.hao123.com' },
          { address: 'www.bing.com' },
          { address: 'www.pornhub.com' },
          { address: 'www.msn.com' },
          { address: 'www.microsoft.com' },
          { address: 'www.wordpress.com' },
          { address: 'www.twitch.tv' },
          { address: 'www.jivejasmin.com' },
          { address: 'www.aliexpress.com' },
          { address: 'www.booking.com' },
          { address: 'www.bbc.com' },
          { address: 'www.163.com' },
          { address: 'www.flipkart.com' },
          { address: 'www.adobe.com' },
          { address: 'adf.ly' },
          { address: 'www.daum.net' },
          { address: 'www.youku.com' },
          { address: 'www.livedoor.com' },
          { address: 'english.china.com' },
          { address: 'www.espn.com' },
          { address: 'hp.myway.com' },
          { address: 'www.ettoday.net' },
          { address: 'www.indiatimes.com' },
          { address: 'www.walmart.com' },
          { address: 'www.bilibili.com' },
          { address: 'www.china.com.cn' },
          { address: 'www.dailymail.co.uk' },
          { address: 'www.zillow.com' },
          { address: 'en.nametests.com' },
          { address: 'ameblo.jp' },
          { address: 'www.globo.com' },
          { address: 'www.indeed.com' },
          { address: 'www.vice.com' },
          { address: 'www.aol.com' },
          { address: 'www.tudou.com' },
          { address: 'www.uol.com.br' },
          { address: 'steamcommunity.com' },
          { address: 'www.huffingtonpost.com' },
          { address: 'www.umeng.com' },
          { address: 'www.cnet.com' },
          { address: 'www.theguardian.com' },
          { address: 'www.slideshare.net' },
          { address: 'www.uptodown.com' },
          { address: 'www.goo.ne.jp' },
          { address: 'www.bet365.com/en' },
          { address: 'www.directrev.com' },
          { address: 'www.dmm.co.jp' },
          { address: 'stackexchange.com' },
          { address: 'www.varzesh3.com' },
          { address: 'matome.naver.jp' },
          { address: 'feedly.com' },
          { address: 'www.taringa.net' },
          { address: 'www.pixiv.net' },
          { address: 'en.ontests.me' },
          { address: '9gag.com' },
          { address: 'www.theladbible.com' },
          { address: 'www.detik.com' },
          { address: 'store.steampowered.com' },
          { address: 'udn.com' },
          { address: 'kakaku.com' },
          { address: 'www.target.com' },
          { address: 'www.foxnews.com' },
          { address: 'putlocker.is' },
          { address: 'www.xfinity.com' },
          { address: 'www.deviantart.com' },
          { address: 'www.tribunnews.com' },
          { address: 'www.orange.fr' },
          { address: 'www.ikea.com' },
          { address: 'www.youm7.com' },
          { address: 'www.ifeng.com' },
          { address: 'www.tistory.com' },
          { address: 'www.w3schools.com' },
          { address: 'www.snapdeal.com' },
          { address: 'www.douyu.com' },
        ],
      };
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
  .container {
    padding: 0rem 4rem;
  }
</style>
