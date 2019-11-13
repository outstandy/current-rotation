import Vue from 'vue'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import CurrentRotation from './components/layouts/CurrentRotation.vue'
import QuietTime from './components/layouts/QuietTime.vue'
import FightMe from './components/layouts/FightMe.vue'
import AlbumView from './components/layouts/AlbumView.vue'
import Form from './components/layouts/Form.vue'
import NotFound from './components/layouts/NotFound.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(firestorePlugin)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      components: {
        default: CurrentRotation,
      }
    },
    {
      path: '/quiet-time',
      components: {
        default: QuietTime,
      }
    },
    {
      path: '/fight-me',
      components: {
        default: FightMe,
      }
    },
    {
      path: '/add',
      components: {
        default: Form,
      }
    },
    {
      path: '/:collectionId/album/:albumId',
      name: 'album',
      components: {
        default: AlbumView
      }
    },
    {
      path: '*',
      components: {
        default: NotFound
      }
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
