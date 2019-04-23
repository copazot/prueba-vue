import VueRouter from 'vue-router'
import testView from './components/vista-test.vue'
import vistaDos from './components/vista-2.vue'

const router = new VueRouter({
  routes: [
    {
      name: 'Test',
      path: '/test',
      component: testView
    },
    {
      name: 'Vista-2',
      path: '/test-2',
      component: vistaDos
    },
    { path: '*', redirect: '/' }
  ]
})
 export default router;
