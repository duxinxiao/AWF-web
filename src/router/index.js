import Vue from 'vue';
import Router from 'vue-router';
import ProtocalLayer from '@/components/ProtocolLayer';
import LinkLayer from '@/components/LinkLayer';
import MonitoringList from '@/components/MonitoringList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/link-layer',
      name: 'link-layer',
      component: LinkLayer,
    },
    {
      path: '/protocol-layer',
      name: 'protocol-layer',
      component: ProtocalLayer,
    },
    {
      path: '/monitoring-list',
      name: 'monitoring-list',
      component: MonitoringList,
    },
  ],
});
